import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  customIcon: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

const servicesSchema = new mongoose.Schema({
  services: [serviceSchema],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Services = mongoose.model('Services', servicesSchema);

export default Services;