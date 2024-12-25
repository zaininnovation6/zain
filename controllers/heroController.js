import Hero from '../models/Hero.js';

export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne({ isActive: true });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHero = async (req, res) => {
  try {
    // Deactivate current active hero
    await Hero.updateMany({}, { isActive: false });
    
    const hero = await Hero.create({
      ...req.body,
      isActive: true
    });
    res.status(201).json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateHero = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!hero) {
      return res.status(404).json({ message: 'Hero section not found' });
    }
    
    res.json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};