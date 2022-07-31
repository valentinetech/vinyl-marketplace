import express from 'express';
import controller from '../controllers/Auction.controller';
import Protect from '../middleware/ValidateToken';

const router = express.Router();

router.post('/create', Protect, controller.createAuction);
router.get('/read/:auctionId', Protect, controller.readAuctionById);
router.get('/read_all/:userId', Protect, controller.readAllUserAuctions);
router.patch('/update/:auctionId', Protect, controller.updateAuction);
router.delete('/delete/:auctionId', Protect, controller.deleteAuction);

export = router;
