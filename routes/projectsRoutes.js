import express from 'express';
import { 
  getProjects,
  createProjects,
  updateProjects
} from '../controllers/projectsController.js';

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(createProjects);

router.route('/:id')
  .put(updateProjects);

export default router;