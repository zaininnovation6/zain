import Services from '../models/Services.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getServices = asyncHandler(async (req, res) => {
  const services = await Services.findOne({ isActive: true });
  if (!services) {
    return res.status(404).json({ message: 'Services section not found' });
  }
  res.json(services);
});

export const createServices = asyncHandler(async (req, res) => {
  await Services.updateMany({}, { isActive: false });
  
  const services = await Services.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(services);
});

export const updateServices = asyncHandler(async (req, res) => {
  const services = await Services.findByIdAndUpdate(
    req.params.id,
    { ...req.body, isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!services) {
    return res.status(404).json({ message: 'Services section not found' });
  }
  
  res.json(services);
});