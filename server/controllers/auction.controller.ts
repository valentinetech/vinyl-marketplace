import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Auction from '../models/auction.model';
import User from '../models/users.model';
import mongoose, { Types } from 'mongoose';
import Logging from '../lib/Logging';

interface CustomRequest extends Request {
  user?: {
    id?: Types.ObjectId;
    _id?: Types.ObjectId;
  };
}

//   body: {
//     name: string;
//     id: string;
//   };
// }

// @desc     Get auction
// @route    GET /api/auction
// @access   Private
export const getAuction = asyncHandler(async (req: CustomRequest, res: Response) => {
  const auctions = await Auction.find({
    user: req.user.id,
  });

  res.status(200).json(auctions);
});

// @desc     Set auction
// @route    POST /api/auction
// @access   Private
export const setAuction = asyncHandler(async (req: CustomRequest, res: Response) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add NAME');
  }

  const auction = await Auction.create({
    name: req.body.name,
    user: req.user.id,
  });
  res.status(200).json(auction);
});

// @desc     Update auction
// @route    PUT /api/auction
// @access   Private
export const updateAuction = asyncHandler(async (req: CustomRequest, res: Response) => {
  const auction = await Auction.findById(req.params.id);

  if (!auction) {
    res.status(400);
    throw new Error('Auction not found');
  }

  const user = await User.find(req.user.id);
  console.log(user);

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Check if logged in user matches auction user

  // if (auction.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('User not authorized');
  // }
  const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedAuction);
});

// @desc     Delete auction
// @route    DELETE /api/auction
// @access   Private
export const deleteAuction = asyncHandler(async (req: CustomRequest, res: Response) => {
  const auction = await Auction.findById(req.params.id);

  if (!auction) {
    res.status(400);
    throw new Error('Auction not found');
  }

  const user = await User.findOne(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Check if logged in user matches auction user

  if (auction.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await auction.deleteOne();

  res.status(200).json({ id: req.params.id });
});
