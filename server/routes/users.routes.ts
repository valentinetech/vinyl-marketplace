import Express from 'express';
import { getMe, loginUser, registerUser } from '../controllers/user.controller';

const router = Express.Router();

// router.get('/', getAuction);
// router.post('/', setAuction);
// router.put('/:id', updateAuction);
// router.delete('/:id', deleteAuction);

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;
