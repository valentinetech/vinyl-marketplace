import mongoose, { Schema, model, Document } from 'mongoose';

export interface IAuction {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IAuctionModel extends IAuction, Document {}

const AuctionSchema = new Schema<IAuctionModel>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please enter name'],
  },
});

export default model<IAuctionModel>('Auction', AuctionSchema);
