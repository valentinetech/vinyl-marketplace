import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IAuctionModel extends Document {
  name: string;
  user: Types.ObjectId;
}

const AuctionSchema = new Schema<IAuctionModel>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please enter name for Album'],
  },
});

export default model<IAuctionModel>('Auction', AuctionSchema);
