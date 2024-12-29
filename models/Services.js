import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: String,
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

const pricingTierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  interval: {
    type: String,
    enum: ['monthly', 'yearly'],
    default: 'monthly'
  },
  features: [{
    type: String,
    required: true
  }],
  isPopular: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

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
  customIcon: String,
  features: [featureSchema],
  benefits: [{
    type: String,
    required: true
  }],
  pricingTiers: [pricingTierSchema],
  image: String,
  technologies: [{
    type: String
  }],
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