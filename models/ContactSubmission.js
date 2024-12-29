import mongoose from 'mongoose';

const contactSubmissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'read', 'archived'],
    default: 'new'
  }
}, {
  timestamps: true
});

const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);

export default ContactSubmission;