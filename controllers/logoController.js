import Logo from '../models/Logo.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getLogo = asyncHandler(async (req, res) => {
  const logo = await Logo.findOne({ isActive: true });
  if (!logo) {
    return res.status(404).json({ message: 'Logo settings not found' });
  }
  res.json(logo);
});

export const createLogo = asyncHandler(async (req, res) => {
  await Logo.updateMany({}, { isActive: false });
  
  const logo = await Logo.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(logo);
});

export const updateLogo = asyncHandler(async (req, res) => {
  const logo = await Logo.findByIdAndUpdate(
    req.params.id,
    { ...req.body, isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!logo) {
    return res.status(404).json({ message: 'Logo settings not found' });
  }
  
  res.json(logo);
});