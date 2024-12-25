import express from 'express';
import { 
  getHero, 
  updateHero, 
  createHero 
} from '../controllers/heroController.js';

const router = express.Router();

router.route('/')
  .get(getHero)
  .post(createHero);

router.route('/:id')
  .put(updateHero);

export default router;