import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IAuction {
  albumCover: string;
  album: string;
  artist: string;
  buyNowPrice: number;
  minBid: number;
  lastBid?: number;
  timeLeft?: number;
  user: Types.ObjectId;
}

export interface IAuctionModel extends Document, IAuction {}

const TIME_LEFT_15MIN = 60 * 15 * 1000;
const PRICE_STARTING = 0;
const PRICE_MIN = 5;

const AuctionSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    albumCover: {
      type: String,
      required: true,
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
      default: PRICE_STARTING,
      required: [true, 'What is the minimum Bid price?'],
    },
    lastBid: {
      type: Number,
      default: PRICE_MIN,
    },
    timeLeft: {
      type: Number,
      default: TIME_LEFT_15MIN,
    },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    versionKey: false,
  }
);

export default mongoose.model<IAuctionModel>('Auction', AuctionSchema);
