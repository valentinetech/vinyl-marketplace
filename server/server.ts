import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import process from './types/types';
import { errorHandler } from './middleware/errorMiddleware';
import connectDB from './config/db';
import bodyParser from 'body-parser';
import Logging from './lib/Logging';

connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auction', require('./routes/auctionRoutes'));
app.use(errorHandler);

app.listen(PORT, () => Logging.info(`Server running on port: ${PORT}`));
