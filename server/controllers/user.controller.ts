import bcryptjs from 'bcrypt';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Logging from '../lib/logging';
import User, { IUser } from '../models/user.model';
import signToken from '../utils/signToken';

const validateToken = (res: Response) => {
	Logging.info('Token validated, user authorized.');

	return res.status(200).json({
		message: 'Token(s) validated',
	});
};
const register = (req: Request, res: Response) => {
	const { username, email, password } = req.body as IUser;

	bcryptjs.hash(password, 10, (hashError, hash) => {
		if (hashError) {
			Logging.error(hashError);
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
				signToken(user, (error, token) => {
					if (error) {
						Logging.error(error);
						return res.status(500).json({
							message: error.message,
							error,
						});
					} else if (token) {
						return res.status(200).json({
							userId: user.id,
							userToken: token,
						});
					}
				});
			})
			.catch((error: { message: string }) => {
				Logging.error(error);
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
					Logging.error(error);
					return res.status(401).json({
						message: 'Wrong password.',
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
								userId: user.id,
								userToken: token,
							});
						}
					});
				} else {
					return res.status(401).json({
						message: 'Unauthorized.',
					});
				}
			});
		})
		.catch((error: unknown) => {
			Logging.error(error);
			res.status(500).json({
				error,
			});
		});
};

const getAllUsers = (res: Response) => {
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
			Logging.error(error);
			return res.status(500).json({
				message: error.message,
				error,
			});
		});
};

export default { validateToken, register, login, getAllUsers };
