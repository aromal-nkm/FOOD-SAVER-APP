const express = require('express');
const router = express.Router();
const Donor = require('../models/donorModel');

// GET: Fetch all donor data
router.get('/donors', async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching donors', error: error.message });
  }
});

module.exports = router;
