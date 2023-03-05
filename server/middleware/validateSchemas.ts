import { ObjectSchema } from 'joi';
import Logging from '../lib/logging';
import { NextFunction, Request, Response } from 'express';

export const validateSchemas = (schema: ObjectSchema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validateAsync(req.body);
			next();
		} catch (error) {
			Logging.error(error);
			return res.status(422).json({ error });
		}
	};
};
