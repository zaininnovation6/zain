import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

const quickLinkSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

const footerSchema = new mongoose.Schema({
  companyInfo: {
    description: {
      type: String,
      required: true
    }
  },
  quickLinks: [quickLinkSchema],
  socialLinks: [socialLinkSchema],
  copyright: {
    text: {
      type: String,
      required: true
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Footer = mongoose.model('Footer', footerSchema);

export default Footer;