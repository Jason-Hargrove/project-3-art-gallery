const Ad = require('../models/blog');
const router = require('express').Router();

// ===== Create =====

// ===== Read =====
  // Index
  router.get('/', async(req, res) => {
    try {
      const foundAds = await Ad.find({})
      res.status(200).json(foundAds)
    } catch (error) {
      console.error(error);
      res.status(400).json({message: error.message})
    }
  })
  // Show
  router.get('/:id', async(req, res) => {
    try {
      const foundAd = await Ad.findById(req.params.id)
      res.status(200).json(foundAds)
    } catch (error) {
      console.error(error);
      res.status(400).json({message: error.message})
    }
  })

// ===== Update =====
router.put('/:id', async (req, res) => {
  try {
    const updateAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updateAd)

  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message})
  }
})

// ===== Delete =====
