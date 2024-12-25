import cloudinary from '../config/cloudinary.js';

export const uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    
    if (!image) {
      return res.status(400).json({ message: 'No image provided' });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      upload_preset: process.env.VITE_CLOUDINARY_UPLOAD_PRESET
    });

    res.json({
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};