import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './lib/Logging';
import auctionRoutes from './routes/Auction.routes';
import userRoutes from './routes/User.routes';

const path = require('path');
const router = express();

mongoose
	.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
	.then(() => {
		Logging.info('Mongo connected successfully.');
	})
	.catch((error) => Logging.error(error));

router.use((req, res, next) => {
	Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

	res.on('finish', () => {
		Logging.info(
			`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
		);
	});

	next();
});

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// router.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

// 	if (req.method == 'OPTIONS') {
// 		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
// 		return res.status(200).json({});
// 	}

// 	next();
// });

router.use('/api/auctions', auctionRoutes);
router.use('/api/users', userRoutes);

// router.get('/ping', (req, res, next) => res.status(200).json({ ping: 'pong' }));

if (process.env.NODE_ENV === 'prod') {
	router.use(express.static(path.join(__dirname, '../client/build')));

	router.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
	router.get('/', (req, res) => res.send('Please set to prod'));
}

router.use((req, res, next) => {
	const error = new Error('Not found');

	Logging.error(error);

	res.status(404).json({
		message: error.message,
	});
});

router.listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
