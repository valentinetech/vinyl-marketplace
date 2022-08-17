import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import Logging from '../lib/logging';
import { Request, Response, NextFunction } from 'express';

const Protect = (req: Request, res: Response, next: NextFunction) => {
	Logging.info('Validating token');

	const token = req.headers.authorization?.split(' ')[1];

	if (token) {
		jwt.verify(token, config.server.token.secret, (error, decoded) => {
			if (error) {
				return res.status(404).json({
					message: 'Something is wrong with token',
					error,
				});
			} else {
				res.locals.jwt = decoded;
				next();
			}
		});
	} else {
		return res.status(401).json({
			message: 'Unauthorized',
		});
	}
};

export default Protect;
