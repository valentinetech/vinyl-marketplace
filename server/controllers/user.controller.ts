import User, { IUser, IUserModel, IUserWithId } from '../models/user.model';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcrypt';
import Logging from '../lib/logging';
import signToken from '../utils/signToken';

const validateToken = (req: Request, res: Response) => {
	Logging.info('Token validated, user authorized.');

	return res.status(200).json({
		message: 'Token(s) validated',
	});
};

const register = (req: Request, res: Response) => {
	const { username, email, password } = req.body as IUser;

	bcryptjs.hash(password, 10, (hashError, hash) => {
		if (hashError) {
			return res.status(401).json({
				message: hashError.message,
				error: hashError,
			});
		}

		const _user = new User<IUserWithId>({
			_id: new mongoose.Types.ObjectId(),
			email,
			username,
			password: hash,
		});

		return _user
			.save()
			.then((user: IUserWithId) => {
				signToken(user, (_error, token) => {
					if (_error) {
						return res.status(500).json({
							message: _error.message,
							error: _error,
						});
					} else if (token) {
						return res.status(200).json({
							message: 'Register successful',
							userInfo: user._id,
							userToken: token,
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

const login = (req: Request, res: Response) => {
	const { username, password } = req.body as IUser;

	User.find({ username })
		.exec()
		.then((users) => {
			if (users.length !== 1) {
				return res.status(401).json({
					message: 'User not found...',
				});
			}

			const user: IUser = users[0];

			bcryptjs.compare(password, user.password, (error, result) => {
				if (error) {
					console.log(error);
					return res.status(401).json({
						message: 'Password Mismatch...',
					});
				} else if (result) {
					signToken(user, (_error, token) => {
						if (_error) {
							return res.status(500).json({
								message: _error.message,
								error: _error,
							});
						} else if (token) {
							return res.status(200).json({
								message: 'Auth successful!',
								userToken: token,
								userInfo: user,
							});
						}
					});
				} else {
					return res.status(401).json({
						message: 'Something is wrong...',
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

const getAllUsers = (req: Request, res: Response) => {
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
