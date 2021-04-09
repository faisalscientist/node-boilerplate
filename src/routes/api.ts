import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

router.get('/users', UserController.index);
router.post('/users', UserController.create);
router.get('/users/:id', UserController.show);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

export default router;