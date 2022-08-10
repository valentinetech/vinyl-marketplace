import { IUser } from '../models/user.model';
import { IAuction } from '../models/auction.model';
import Joi, { ObjectSchema } from 'joi';
import Logging from '../lib/Logging';
import { NextFunction, Request, Response } from 'express';

// interface IAuction {
// 	user: string;
// 	albumCover: string;
// 	album: string;
// 	artist: string;
// 	buyNowPrice: number;
// 	minBid: number;
// 	isBought?: boolean;
// 	lastBid?: number;
// 	timeLeft?: number;
// }

// interface IUser {
// 	[x: string]: any;
// 	username: string;
// 	email: string;
// 	password: string;
// 	token?: string;
// }

export const ValidateJoi = (schema: ObjectSchema) => {
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

export const Schemas = {
	user: {
		register: Joi.object<IUser>({
			username: Joi.string().min(5).required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(5).strict().required(),
			passwordConfirm: Joi.string().valid(Joi.ref('password')).required().strict(),
		}),
		login: Joi.object<IUser>({
			username: Joi.string().required(),
			password: Joi.string().required(),
		}),
	},
	auction: {
		create: Joi.object<IAuction>({
			user: Joi.string()
				.regex(/^[0-9a-fA-F]{24}$/)
				.required(),
			albumCover: Joi.string().required(),
			album: Joi.string().required(),
			artist: Joi.string().required(),
			buyNowPrice: Joi.number().required(),
			minBid: Joi.number().required(),
			lastBid: Joi.number().optional(),
			timeLeft: Joi.number().optional(),
			isBought: Joi.boolean().optional(),
		}),
	},
};
