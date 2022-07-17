import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../models/user.model';
import { IAuction } from '../models/Auction.model';
import Logging from '../lib/Logging';

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

// export const Schemas = {
//   author: {
//     create: Joi.object<IUser>({
//       name: Joi.string().required(),
//     }),
//     update: Joi.object<IUser>({
//       name: Joi.string().required(),
//     }),
//   },
//   book: {
//     create: Joi.object<IAuction>({
//       name: Joi.string()
//         .regex(/^[0-9a-fA-F]{24}$/)
//         .required(),
//       title: Joi.string().required(),
//     }),
//     update: Joi.object<IAuction>({
//       author: Joi.string()
//         .regex(/^[0-9a-fA-F]{24}$/)
//         .required(),
//       title: Joi.string().required(),
//     }),
//   },
// };
