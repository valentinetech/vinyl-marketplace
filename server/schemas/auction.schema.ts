import { IAuction, IUserBids } from './../models/auction.model';
import Joi from 'joi';
export const auctionSchema = {
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
