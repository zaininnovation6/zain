import Contact from '../models/Contact.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findOne({ isActive: true });
  if (!contact) {
    return res.status(404).json({ message: 'Contact settings not found' });
  }
  res.json(contact);
});

export const createContact = asyncHandler(async (req, res) => {
  // Deactivate current active settings
  await Contact.updateMany({}, { isActive: false });
  
  const contact = await Contact.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(contact);
});

export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { ...req.body, isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!contact) {
    return res.status(404).json({ message: 'Contact settings not found' });
  }
  
  res.json(contact);
});