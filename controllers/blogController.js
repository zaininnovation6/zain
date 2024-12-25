import Blog from '../models/Blog.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ isActive: true }).sort({ createdAt: -1 });
  res.json(blogs);
});

export const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog post not found' });
  }
  res.json(blog);
});

export const createBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.create({
    ...req.body,
    isActive: true
  });
  res.status(201).json(blog);
});

export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  if (!blog) {
    return res.status(404).json({ message: 'Blog post not found' });
  }
  
  res.json(blog);
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true }
  );
  
  if (!blog) {
    return res.status(404).json({ message: 'Blog post not found' });
  }
  
  res.json({ message: 'Blog post deleted successfully' });
});