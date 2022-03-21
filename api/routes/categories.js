const express = require('express');
const Categories = require('../models/Categories');
const router = express.Router();

// ALL CATEGORIES
router.get('/', async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// GET A SPECIFIC CATEGORY
router.get('/:id', async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// DELETE A SPECIFIC CATEGORY
router.delete('/:id', async (req, res) => {
  try {
    const removedCategory = await Categories.deleteOne({ _id: req.params.id });
    res.status(200).json(removedCategory);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// DELETE ALL CATEGORY
router.delete('/', async (req, res) => {
  try {
    const removedCategories = await Categories.deleteMany();
    res.status(200).json(removedCategory);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// UPDATE A CATEGORY
router.patch('/:id', async (req, res) => {
  try {
    const updatedCategory = await Categories.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, icon: req.body.icon } },
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// ADD A CATEGORY
router.post('/', async (req, res) => {
  const category = new Categories({
    title: req.body.title,
    icon: req.body.icon,
  });

  try {
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
