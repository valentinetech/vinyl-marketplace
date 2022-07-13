import { Schema, model, Document } from 'mongoose';

export interface IAuction {
  name: string;
}

export interface IAuctionModel extends IAuction, Document {}

const AuctionSchema = new Schema<IAuctionModel>({
  name: {
    type: String,
    required: [true, 'Please enter name'],
  },
});

export default model<IAuctionModel>('Auction', AuctionSchema);
