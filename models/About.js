import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

const valueSchema = new mongoose.Schema({
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

const aboutSchema = new mongoose.Schema({
  companyIntro: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  values: [valueSchema],
  team: [teamMemberSchema],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const About = mongoose.model('About', aboutSchema);

export default About;