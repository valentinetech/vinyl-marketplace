import { ValidateJoi, Schemas } from '../middleware/ValidateSchemas';
import express from 'express';
import Protect from '../middleware/ValidateToken';
import controller from '../controllers/User.controller';

const router = express.Router();

router.get('/validate', Protect, controller.validateToken);
router.get('/get_all/', Protect, controller.getAllUsers);
router.post('/register', ValidateJoi(Schemas.user.register), controller.register);
router.post('/login', ValidateJoi(Schemas.user.login), controller.login);

export = router;
