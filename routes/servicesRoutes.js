import express from 'express';
import { 
  getServices,
  createServices,
  updateServices
} from '../controllers/servicesController.js';

const router = express.Router();

router.route('/')
  .get(getServices)
  .post(createServices);

router.route('/:id')
  .put(updateServices);

export default router;