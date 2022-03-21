const express = require('express');
const Links = require('../models/Links');
const router = express.Router();

// ALL Links
router.get('/', async (req, res) => {
  try {
    const links = await Links.find();
    res.status(200).json(links);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// GET A SPECIFIC LINKS CATEGORY
router.get('/:catId', async (req, res) => {
  try {
    const links = await Links.find({ catId: req.params.catId });
    res.status(200).json(links);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// DELETE A SPECIFIC LINK
router.delete('/:id', async (req, res) => {
  try {
    const removedLink = await Links.deleteOne({ _id: req.params.id });
    res.status(200).json(removedLink);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// DELETE ALL LINKS
router.delete('/', async (req, res) => {
  try {
    const removedLinks = await Links.deleteMany();
    res.status(200).json(removedLinks);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// UPDATE A LINK
router.patch('/:id', async (req, res) => {
  try {
    const updatedLink = await Links.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          link: req.body.link,
          catId: req.body.catId,
        },
      },
    );
    res.status(200).json(updatedLink);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// ADD A LINK
router.post('/', async (req, res) => {
  const link = new Links({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    catId: req.body.catId,
  });

  try {
    const savedLink = await link.save();
    res.status(201).json(savedLink);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
