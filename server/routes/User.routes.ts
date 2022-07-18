import express from 'express';
import Protect from '../middleware/validateToken';
import controller from '../controllers/User.controller';
import auctionController from '../controllers/Auction.controller';

const router = express.Router();

router.get('/validate', Protect, controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllUsers);

export = router;
