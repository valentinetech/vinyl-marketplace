import { IUser } from './../models/User.model';
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
  const { username, email, password } = req.body as IUser;

  bcryptjs.hash(password, 10, (hashError, hash) => {
    if (hashError) {
      return res.status(401).json({
        message: hashError.message,
        error: hashError,
      });
    }

    const _user: IUser = new User<IUser>({
      _id: new mongoose.Types.ObjectId(),
      email,
      username,
      password: hash,
    });

    return _user
      .save()
      .then((user: IUser) => {
        signToken(user, (_error, token) => {
          if (_error) {
            return res.status(500).json({
              message: _error.message,
              error: _error,
            });
          } else if (token) {
            return res.status(200).json({
              message: 'Register successful',
              user: user.id,
              token: token,
            });
          }
        });
      })
      .catch((error: { message: string }) => {
        return res.status(500).json({
          message: error.message,
          error,
        });
      });
  });
};

const login = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as IUser;

  User.find({ username })
    .exec()
    .then((users) => {
      if (users.length !== 1) {
        return res.status(401).json({
          message: 'User not found...',
        });
      }

      bcryptjs.compare(password, users[0].password, (error, result) => {
        if (error) {
          console.log(error);
          return res.status(401).json({
            message: 'Password Mismatch...',
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
                message: 'Auth successful!',
                token: token,
                user: users[0],
              });
            }
          });
        } else {
          return res.status(401).json({
            message: 'Incorrect password...',
          });
        }
      });
    })
    .catch((err: unknown) => {
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
