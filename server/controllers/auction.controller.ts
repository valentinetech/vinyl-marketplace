import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Auction from '../models/Auction.model';

const createAuction = (req: Request, res: Response, next: NextFunction) => {
  const { albumCover, album, artist, buyNowPrice, minBid, lastBid, timeLeft } = req.body;

  const auction = new Auction({
    _id: new mongoose.Types.ObjectId(),
    albumCover,
    album,
    artist,
    buyNowPrice,
    minBid,
    lastBid,
    timeLeft,
  });

  return auction
    .save()
    .then((auction) => res.status(201).json({ auction: auction }))
    .catch((error) => res.status(500).json({ error }));
};

const readAuction = (req: Request, res: Response, next: NextFunction) => {
  const auctionId = req.params.auctionId;

  return Auction.findById(auctionId)
    .then((auction) =>
      auction ? res.status(200).json({ auction: auction }) : res.status(404).json({ message: 'Auction not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Auction.find()
    .then((auction) => res.status(200).json({ auction }))
    .catch((error) => res.status(500).json({ error }));
};

const updateAuction = (req: Request, res: Response, next: NextFunction) => {
  const auctionId = req.params.auctionId;

  return Auction.findById(auctionId)
    .then((auction) => {
      if (auction) {
        auction.set(req.body);

        return auction
          .save()
          .then((auction) => res.status(201).json({ auction }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: 'Auction not found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteAuction = (req: Request, res: Response, next: NextFunction) => {
  const auctionId = req.params.auctionId;

  return Auction.findByIdAndDelete(auctionId)
    .then((auction) =>
      auction
        ? res.status(201).json({ auction: auction, message: 'Deleted' })
        : res.status(404).json({ message: 'Auction not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createAuction,
  readAuction,
  readAll,
  updateAuction,
  deleteAuction,
};
