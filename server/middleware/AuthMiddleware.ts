// import jwt, { JwtPayload } from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler';
// import User from '../models/users.model';
// import { Request, Response, NextFunction } from 'express';
// import Logging from '../lib/Logging';
// import { Types } from 'mongoose';

// interface CustomRequest extends Request {
//   // user: { _id: Types.ObjectId };
// }

// const SECRET_KEY = process.env.JWT_SECRET;

// const Protect = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
//   let token: string;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       // Get token from header Bearer(space)token
//       const token = req.headers.authorization.split(' ')[1];

//       // Verify token
//       const decoded: any = jwt.verify(token, SECRET_KEY);

//       // Get user from token
//       req.user = await User.findById(decoded.id).select('-password');
//     } catch {
//       Logging.error(401);
//       throw new Error('Not authorized');
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error('Not authorized, no token');
//   }
// });

// export default Protect;
