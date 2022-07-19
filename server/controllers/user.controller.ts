import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcrypt';
import Logging from '../lib/Logging';
import User from '../models/User.model';
import signToken from '../utils/signToken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  Logging.info('Token validated, user authorized.');

  return res.status(200).json({
    message: 'Token(s) validated',
  });
};

const register = (req: Request, res: Response, next: NextFunction) => {
  let { username, email, password } = req.body;

  bcryptjs.hash(password, 10, (hashError, hash) => {
    if (hashError) {
      return res.status(401).json({
        message: hashError.message,
        error: hashError,
      });
    }

    const _user = new User({
      _id: new mongoose.Types.ObjectId(),
      email,
      username,
      password: hash,
    });

    return _user
      .save()
      .then((user) => {
        return res.status(201).json({
          user,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
          error,
        });
      });
  });
};

const login = (req: Request, res: Response, next: NextFunction) => {
  let { username, password } = req.body;

  User.find({ username })
    .exec()
    .then((users) => {
      if (users.length !== 1) {
        return res.status(401).json({
          message: 'Unauthorized',
        });
      }

      bcryptjs.compare(password, users[0].password, (error, result) => {
        if (error) {
          return res.status(401).json({
            message: 'Password Mismatch',
          });
        } else if (result) {
          signToken(users[0], (_error, token) => {
            if (_error) {
              return res.status(500).json({
                message: _error.message,
                error: _error,
              });
            } else if (token) {
              return res.status(200).json({
                message: 'Auth successful',
                token: token,
                user: users[0],
              });
            }
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  User.find()
    .select('-password')
    .exec()
    .then((users) => {
      return res.status(200).json({
        users: users,
        count: users.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { validateToken, register, login, getAllUsers };
