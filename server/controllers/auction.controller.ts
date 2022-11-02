import { IAuction } from '../models/auction.model';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Auction from '../models/auction.model';

const createAuction = (req: Request, res: Response, next: NextFunction) => {
	const { albumCover, album, artist, buyNowPrice, minBid, lastBid, timeLeft, isBought, user } = req.body as IAuction;

	const auction = new Auction({
		_id: new mongoose.Types.ObjectId(),
		user,
		albumCover,
		album,
		artist,
		buyNowPrice,
		minBid,
		lastBid,
		timeLeft,
		isBought,
	});

	return auction
		.save()
		.then((auction) => res.status(201).json({ auction: auction }))
		.catch((error) => res.status(500).json({ error }));
};

const readAuctionById = (req: Request, res: Response, next: NextFunction) => {
	const auctionId = req.params.auctionId;

	return Auction.findById(auctionId)
		.then((auction) =>
			auction ? res.status(200).json({ auction: auction }) : res.status(404).json({ message: 'Auction not found' })
		)
		.catch((error) => res.status(500).json({ error }));
};

const readAllUserAuctions = (req: Request, res: Response, next: NextFunction) => {
	const userId = req.params.userId;

	return Auction.find({ user: userId })
		.then((auction) => res.status(200).json({ auction }))
		.catch((error) => res.status(500).json({ error }));
};

const readAllAuctions = (req: Request, res: Response, next: NextFunction) => {
	return Auction.find({})
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
	readAuctionById,
	readAllUserAuctions,
	readAllAuctions,
	updateAuction,
	deleteAuction,
};
