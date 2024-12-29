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

const footerStyleSchema = new mongoose.Schema({
  textColor: {
    type: String,
    default: '#FFFFFF'
  },
  backgroundColor: {
    type: String,
    default: '#111827'
  },
  fontSize: {
    base: {
      type: String,
      default: '1rem'
    },
    heading: {
      type: String,
      default: '1.25rem'
    }
  }
}, { _id: false });

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
  backgroundImage: {
    type: String
  },
  styles: {
    type: footerStyleSchema,
    default: () => ({})
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