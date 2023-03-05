import { IUser } from './../models/user.model';
import Joi from 'joi';
export const userSchema = {
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
};
