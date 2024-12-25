import About from '../models/About.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getAbout = asyncHandler(async (req, res) => {
  const about = await About.findOne({ isActive: true });
  if (!about) {
    return res.status(404).json({ message: 'About section not found' });
  }
  res.json(about);
});

export const createAbout = asyncHandler(async (req, res) => {
  await About.updateMany({}, { isActive: false });
  
  const about = await About.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(about);
});

export const updateAbout = asyncHandler(async (req, res) => {
  const about = await About.findByIdAndUpdate(
    req.params.id,
    { ...req.body, isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!about) {
    return res.status(404).json({ message: 'About section not found' });
  }
  
  res.json(about);
});

export const updateTeamMember = asyncHandler(async (req, res) => {
  const about = await About.findById(req.params.id);
  if (!about) {
    return res.status(404).json({ message: 'About section not found' });
  }

  const memberIndex = about.team.findIndex(
    member => member._id.toString() === req.params.memberId
  );

  if (memberIndex === -1) {
    return res.status(404).json({ message: 'Team member not found' });
  }

  about.team[memberIndex] = { ...about.team[memberIndex], ...req.body };
  await about.save();

  res.json(about);
});

export const deleteTeamMember = asyncHandler(async (req, res) => {
  const about = await About.findById(req.params.id);
  if (!about) {
    return res.status(404).json({ message: 'About section not found' });
  }

  about.team = about.team.filter(
    member => member._id.toString() !== req.params.memberId
  );
  await about.save();

  res.json(about);
});