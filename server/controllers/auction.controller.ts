import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Auction from '../models/auction.model';

// @desc     Get auction
// @route    GET /api/auction
// @access   Private
export const getAuction = asyncHandler(async (req: Request, res: Response) => {
  const auctions = await Auction.find();

  res.status(200).json(auctions);
});

// @desc     Set auction
// @route    POST /api/auction
// @access   Private
export const setAuction = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add NAME');
  }

  const auction = await Auction.create({
    name: req.body.name,
  });
  res.status(200).json(auction);
});

// @desc     Update auction
// @route    PUT /api/auction
// @access   Private
export const updateAuction = asyncHandler(async (req: Request, res: Response) => {
  const auction = await Auction.findById(req.params.id);

  if (!auction) {
    res.status(400);
    throw new Error('Auction not found');
  }

  const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateAuction);
});

// @desc     Delete auction
// @route    DELETE /api/auction
// @access   Private
export const deleteAuction = asyncHandler(async (req: Request, res: Response) => {
  const auction = await Auction.findById(req.params.id);

  if (!auction) {
    res.status(400);
    throw new Error('Auction not found');
  }

  await auction.deleteOne();

  res.status(200).json({ id: req.params.id });
});
