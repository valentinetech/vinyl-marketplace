import { ValidateJoi, Schemas } from '../middleware/validateSchemas';
import express from 'express';
import controller from '../controllers/auction.controller';
import Protect from '../middleware/validateToken';

const router = express.Router();

router.post('/create', ValidateJoi(Schemas.auction.create), Protect, controller.createAuction);
router.get('/read/:auctionId', Protect, controller.readAuctionById);
router.get('/read_all/:userId', Protect, controller.readAllUserAuctions);
router.patch('/update/:auctionId', Protect, controller.updateAuction);
router.delete('/delete/:auctionId', Protect, controller.deleteAuction);

export default router;
