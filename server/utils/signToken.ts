import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import logging from '../lib/logging';
import { IUserWithId } from '../models/user.model';

const signToken = (user: IUserWithId, callback: (error: Error | null, token: string | null) => void): void => {
	const timeSinceEpoch = new Date().getTime();
	const expirationTime = timeSinceEpoch + Number(config.server.token.expireTime) * 100000;
	const expirationTimeInSeconds = Math.floor(expirationTime / 1000);

	logging.info(`Attempting to sign token for ${user._id}`);

	try {
		jwt.sign(
			{
				username: user.username,
			},
			config.server.token.secret,
			{
				issuer: config.server.token.issuer,
				algorithm: 'HS256',
				expiresIn: expirationTimeInSeconds,
			},
			(error, token) => {
				if (error) {
					callback(error, null);
				} else if (token) {
					callback(null, token);
				}
			},
		);
	} catch (error) {
		if (error instanceof Error) {
			logging.error(error.message);
			callback(error, null);
		} else {
			logging.error(error);
		}
	}
};

export default signToken;
