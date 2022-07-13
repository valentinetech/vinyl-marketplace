import mongoose from 'mongoose';

// const typeScema = new mongoose.SchemaType();

const auctionSchema = new mongoose.Schema({
  auction: {
    type: String,
    required: [true, 'Please add a text value'],
  },
});

const Auction = mongoose.model('Auction', auctionSchema);

export default Auction;
