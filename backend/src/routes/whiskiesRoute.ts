import { Router } from 'express';
import { getWhiskiesController } from '../controllers/whiskiesController';

const router = Router();

router.get('/', getWhiskiesController);

export default router;
