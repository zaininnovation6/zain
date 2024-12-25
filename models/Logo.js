import mongoose from 'mongoose';

const logoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  showImage: {
    type: Boolean,
    default: true
  },
  image: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Logo = mongoose.model('Logo', logoSchema);

export default Logo;