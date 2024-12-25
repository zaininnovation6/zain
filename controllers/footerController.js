import Footer from '../models/Footer.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getFooter = asyncHandler(async (req, res) => {
  const footer = await Footer.findOne({ isActive: true });
  if (!footer) {
    return res.status(404).json({ message: 'Footer settings not found' });
  }
  res.json(footer);
});

export const createFooter = asyncHandler(async (req, res) => {
  await Footer.updateMany({}, { isActive: false });
  
  const footer = await Footer.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(footer);
});

export const updateFooter = asyncHandler(async (req, res) => {
  const footer = await Footer.findByIdAndUpdate(
    req.params.id,
    { ...req.body, isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!footer) {
    return res.status(404).json({ message: 'Footer settings not found' });
  }
  
  res.json(footer);
});