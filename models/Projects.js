import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  href: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: true });

const projectsSchema = new mongoose.Schema({
  projects: [projectSchema],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Projects = mongoose.model('Projects', projectsSchema);

export default Projects;