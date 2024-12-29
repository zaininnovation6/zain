import express from 'express';
import {
  getSubmissions,
  createSubmission,
  updateSubmissionStatus,
  deleteSubmission
} from '../controllers/contactSubmissionController.js';

const router = express.Router();

router.route('/')
  .get(getSubmissions)
  .post(createSubmission);

router.route('/:id')
  .patch(updateSubmissionStatus)
  .delete(deleteSubmission);

export default router;