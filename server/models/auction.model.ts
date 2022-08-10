import mongoose, { Schema, Document } from 'mongoose';

export interface IAuction {
	user: string;
	albumCover: string;
	album: string;
	artist: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	timeLeft?: number;
}
// dsd
export interface IAuctionModel extends Document, IAuction {}

const TIME_LEFT_15MIN: Number = 60 * 15 * 1000;
const PRICE_STARTING: Number = 0;
const PRICE_MIN: Number = 5;

const AuctionSchema: Schema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		albumCover: {
			type: String,
			required: [true, 'Please add album Cover'],
		},
		album: {
			type: String,
			required: [true, 'What is name of the Album?'],
		},
		artist: {
			type: String,
			required: [true, 'Who is the Artist for this Album?'],
		},
		buyNowPrice: {
			type: Number,
			required: [true, 'Enter Buy Now price'],
		},
		minBid: {
			type: Number,
			default: PRICE_MIN,
			required: [true, 'What is the minimum Bid price?'],
		},
		lastBid: {
			type: Number,
			default: PRICE_STARTING,
		},
		timeLeft: {
			type: Number,
			default: TIME_LEFT_15MIN,
		},
		isBought: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
		versionKey: false,
	}
);

export default mongoose.model<IAuctionModel>('Auction', AuctionSchema);
