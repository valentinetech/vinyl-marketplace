import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import process from './types/process.types';
import { errorHandler } from './middleware/ErrorMiddleware';
import connectDB from './config/db';
import Logging from './lib/Logging';

connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/auctions', require('./routes/auctions.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use(errorHandler);

app.listen(PORT, () => Logging.info(`Server running on port: ${PORT}`));
