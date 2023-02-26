import { IUserBids } from './../models/auction.model';
import { IUser, IUserWithId } from '../models/user.model';
import { IAuction } from '../models/auction.model';
import Joi, { ObjectSchema } from 'joi';
import Logging from '../lib/logging';
import { NextFunction, Request, Response } from 'express';

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
			userId: Joi.string()
				.regex(/^[0-9a-fA-F]{24}$/)
				.required(),
			albumCover: Joi.string().required(),
			albumName: Joi.string().required(),
			artistName: Joi.string().required(),
			buyNowPrice: Joi.number().required(),
			minBid: Joi.number().required(),
			lastBid: Joi.number().optional(),
			endDate: Joi.date().optional(),
			isBought: Joi.boolean().optional(),
			userBids: Joi.array().optional(),
		}),
		bid: Joi.object<IUserBids>({
			bidderId: Joi.string().required(),
			userBid: Joi.number().required(),
		}),
	},
};
