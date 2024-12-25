import express from 'express';
import { 
  getAbout,
  createAbout,
  updateAbout,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/aboutController.js';

const router = express.Router();

router.route('/')
  .get(getAbout)
  .post(createAbout);

router.route('/:id')
  .put(updateAbout);

router.route('/:id/team/:memberId')
  .put(updateTeamMember)
  .delete(deleteTeamMember);

export default router;