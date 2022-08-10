import { ValidateJoi, Schemas } from '../middleware/validateSchemas';
import express from 'express';
import Protect from '../middleware/validateToken';
import controller from '../controllers/user.controller';

const router = express.Router();

router.get('/validate', Protect, controller.validateToken);
router.get('/get_all/', Protect, controller.getAllUsers);
router.post('/register', ValidateJoi(Schemas.user.register), controller.register);
router.post('/login', ValidateJoi(Schemas.user.login), controller.login);

export = router;

//dsds
