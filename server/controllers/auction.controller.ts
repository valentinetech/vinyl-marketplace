import Auction, { IAuction } from '../models/auction.model';
import { Request, Response } from 'express';
import Logging from '../lib/logging';
import mongoose from 'mongoose';

const createAuction = async (req: Request, res: Response) => {
	const { userId, albumCover, albumName, artistName, buyNowPrice, minBid, lastBid, endDate, isBought } =
		req.body as IAuction;

	const auction = new Auction({
		_id: new mongoose.Types.ObjectId(),
		userId,
		albumCover,
		albumName,
		artistName,
		buyNowPrice,
		minBid,
		lastBid,
		endDate,
		isBought,
	});

	try {
		const auctionSaved = await auction.save();
		return res.status(201).json({ auction: auctionSaved });
	} catch (error) {
		return res.status(500).json({ error: 'Please Check auction data' + error });
	}
};

const readAuctionById = async (req: Request, res: Response) => {
	const auctionId = req.params.auctionId;

	try {
		const auction = await Auction.findById(auctionId);
		return auction ? res.status(200).json({ auction }) : res.status(404).json({ message: 'Auction not found' });
	} catch (error) {
		Logging.error(error);
		return res.status(500).json({ error });
	}
};

const readAllUserAuctions = async (req: Request, res: Response) => {
	const userId = req.params.userId;

	try {
		const auction = await Auction.find({ userId });
		return res.status(200).json({ auction });
	} catch (error) {
		Logging.error(error);
		return res.status(500).json({ error });
	}
};

const readAllAuctions = async (req: Request, res: Response) => {
	try {
		const auction = await Auction.find({});
		return res.status(200).json({ auction });
	} catch (error) {
		Logging.error(error);
		return res.status(500).json({ error });
	}
};

const updateAuction = async (req: Request, res: Response) => {
	const auctionId = req.params.auctionId;

	try {
		const auctionSelected = await Auction.findById(auctionId);
		if (auctionSelected) {
			auctionSelected.set(req.body);
			const auctionSaved = await auctionSelected.save();
			return res.status(201).json({ auction: auctionSaved });
		} else {
			return res.status(404).json({ message: 'Auction not found' });
		}
	} catch (error) {
		Logging.error(error);
		return res.status(500).json({ error });
	}
};

const deleteAuction = async (req: Request, res: Response) => {
	const auctionId = req.params.auctionId;

	try {
		const auction = await Auction.findByIdAndDelete(auctionId);
		return auction
			? res.status(201).json({ auction, message: 'Deleted' })
			: res.status(404).json({ message: 'Auction not found' });
	} catch (error) {
		Logging.error(error);
		return res.status(500).json({ error });
	}
};

export default {
	createAuction,
	readAuctionById,
	readAllUserAuctions,
	readAllAuctions,
	updateAuction,
	deleteAuction,
};
