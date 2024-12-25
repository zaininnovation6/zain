import express from 'express';
import { 
  getFooter,
  createFooter,
  updateFooter
} from '../controllers/footerController.js';

const router = express.Router();

router.route('/')
  .get(getFooter)
  .post(createFooter);

router.route('/:id')
  .put(updateFooter);

export default router;