import express from 'express';
import { 
  getContact,
  createContact,
  updateContact
} from '../controllers/contactController.js';

const router = express.Router();

router.route('/')
  .get(getContact)
  .post(createContact);

router.route('/:id')
  .put(updateContact);

export default router;