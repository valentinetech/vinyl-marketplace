import express from 'express';
import controller from '../controllers/Auction.controller';
// import { Schemas, ValidateJoi } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/create', controller.createAuction);
router.get('/get/:auctionId', controller.readAuction);
router.get('/get', controller.readAll);
router.patch('/update/:auctionId', controller.updateAuction);
router.delete('/delete/:auctionId', controller.deleteAuction);

export = router;
