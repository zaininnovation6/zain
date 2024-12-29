import ContactSubmission from '../models/ContactSubmission.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

// Get all submissions
export const getSubmissions = asyncHandler(async (req, res) => {
  const submissions = await ContactSubmission.find({})
    .sort({ createdAt: -1 });
  res.json(submissions);
});

// Create new submission
export const createSubmission = asyncHandler(async (req, res) => {
  const submission = await ContactSubmission.create(req.body);
  res.status(201).json(submission);
});

// Update submission status
export const updateSubmissionStatus = asyncHandler(async (req, res) => {
  const submission = await ContactSubmission.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }

  res.json(submission);
});

// Delete submission
export const deleteSubmission = asyncHandler(async (req, res) => {
  const submission = await ContactSubmission.findByIdAndDelete(req.params.id);

  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }

  res.json({ message: 'Submission deleted' });
});