// routes/donorRoutes.js
const express = require('express');
const router = express.Router();
const Donor = require('../models/donorModel');

// POST: Create a new donor
router.post('/', async (req, res) => {
  try {
    const { name, location, contactNumber, itemDescription, cookedDateTime, expirationTime } = req.body;

    // Create a new donor document
    const newDonor = new Donor({
      name,
      location,
      contactNumber,
      itemDescription,
      cookedDateTime,
      expirationTime
    });

    // Save to database
    await newDonor.save();

    res.status(201).json({ message: 'Donor data saved successfully', donor: newDonor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving donor data', error: error.message });
  }
});

module.exports = router;
