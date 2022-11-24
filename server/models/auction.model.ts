import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IUserBids {
	bidderId: string;
	userBid: number;
}

export interface IAuction {
	userId: string;
	albumCover: string;
	albumName: string;
	artistName: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	endDate?: number;
	createdAt?: string;
	updatedAt?: string;
	userBids?: IUserBids[];
}

export interface IAuctionModel extends Document, IAuction {}

const date = Date.now();
const TIME_LEFT_15MIN: Number = 60 * 15 * 1000 + date;
const PRICE_STARTING: Number = 0;
const PRICE_MIN: Number = 5;

const AuctionSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		albumCover: {
			type: String,
			required: [true, 'Please add album Cover'],
		},
		albumName: {
			type: String,
			required: [true, 'What is name of the Album?'],
		},
		artistName: {
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
		endDate: {
			type: Date,
			default: TIME_LEFT_15MIN,
		},
		isBought: {
			type: Boolean,
			default: false,
		},
		userBids: {
			type: Array,
			default: [],
		},
	},
	{
		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
		versionKey: false,
	}
);

export default mongoose.model<IAuctionModel>('Auction', AuctionSchema);
