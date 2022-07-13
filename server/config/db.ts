import Logging from '../lib/Logging';
import mongoose from 'mongoose';

const MONGO_TOKEN = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_TOKEN);

    Logging.info(`MongoDB connected: ${connect.connection.host}`);
  } catch (error: unknown) {
    Logging.error(error);
    process.exit(1);
  }
};

export default connectDB;
