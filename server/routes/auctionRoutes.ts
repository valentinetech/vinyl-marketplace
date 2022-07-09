import Express from 'express';
import { getAuction, setAuction, updateAuction, deleteAuction } from '../controllers/auctionController';

// const { getAuction, setAuction, updateAuction, deleteAuction } = require('../controllers/auctionController');

const router = Express.Router();

router.get('/', getAuction);
router.post('/', setAuction);
router.put('/:id', updateAuction);
router.delete('/:id', deleteAuction);

module.exports = router;
