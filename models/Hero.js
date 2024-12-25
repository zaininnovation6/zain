import mongoose from 'mongoose';

const styleSchema = new mongoose.Schema({
  fontSize: String,
  color: String,
  textAlign: {
    type: String,
    enum: ['left', 'center', 'right'],
    default: 'left'
  }
}, { _id: false });

const heroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  },
  titleStyle: {
    type: styleSchema,
    default: {
      fontSize: '3.75rem',
      color: '#ffffff',
      textAlign: 'left'
    }
  },
  subtitleStyle: {
    type: styleSchema,
    default: {
      fontSize: '1.5rem',
      color: '#f3f4f6',
      textAlign: 'left'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;