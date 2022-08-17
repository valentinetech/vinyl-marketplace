import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import logging from './lib/logging';
import auctionRoutes from './routes/auction.routes';
import userRoutes from './routes/user.routes';

const app = express();

/** Connect to Mongo*/
mongoose
	.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
	.then(() => {
		logging.info('Mongo connected successfully.');
	})
	.catch((error) => console.log(error));

app.use((req, res, next) => {
	logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

	res.on('finish', () => {
		logging.info(
			`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
		);
	});

	next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', 'https://vinyl-auction.netlify.app/');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

// 	if (req.method == 'OPTIONS') {
// 		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
// 		return res.status(200).json({});
// 	}

// 	next();
// });
app.use('/api/auctions', auctionRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Hello from Express!'));
app.get('/ping', (req, res, next) => res.status(200).json({ ping: 'pong' }));

/** Error handling */
app.use((req, res, next) => {
	const error = new Error('Not found');

	logging.error(error);

	res.status(404).json({
		message: error.message,
	});
});

http
	.createServer(app)
	.listen(config.server.port, () => logging.info(`Server is running on port ${config.server.port}`));
