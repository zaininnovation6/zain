import Projects from '../models/Projects.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Projects.findOne({ isActive: true });
  if (!projects) {
    return res.status(404).json({ message: 'Projects section not found' });
  }
  res.json(projects);
});

export const createProjects = asyncHandler(async (req, res) => {
  await Projects.updateMany({}, { isActive: false });
  
  const projects = await Projects.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(projects);
});

export const updateProjects = asyncHandler(async (req, res) => {
  const projects = await Projects.findByIdAndUpdate(
    req.params.id,
    { ...req.body, isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!projects) {
    return res.status(404).json({ message: 'Projects section not found' });
  }
  
  res.json(projects);
});