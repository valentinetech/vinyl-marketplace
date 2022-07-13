import mongoose from 'mongoose';

const MONGO_TOKEN = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_TOKEN);

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error: unknown) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
