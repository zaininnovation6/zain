import express from 'express';
import { 
  getLogo,
  createLogo,
  updateLogo
} from '../controllers/logoController.js';

const router = express.Router();

router.route('/')
  .get(getLogo)
  .post(createLogo);

router.route('/:id')
  .put(updateLogo);

export default router;