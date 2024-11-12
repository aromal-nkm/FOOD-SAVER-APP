const express = require('express');
const router = express.Router();
const Donor = require('../models/donorModel');
const nodemailer = require('nodemailer');

// GET: Fetch all donors
router.get('/donors', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ message: 'Error fetching donors' });
  }
});

// POST: Send email to a donor
router.post('/sendMail/:id', async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);

    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aromalnklm@gmail.com', // Replace with your email
        pass: 'lfui zyjg hxie uuwn', // Replace with your email password or app-specific password
      },
    });

    // Define email options
    const mailOptions = {
      from: 'aromalnklm@gmail.com', // Replace with your email
      to: donor.email,
      subject: 'Thank You for Your Donation',
      text: `Dear ${donor.name},\n\nThank you for your generous donation of ${donor.itemDescription}. Your contribution helps us serve those in need it will be collected in few hours.\n\nBest regards,\n[Your Team Name]`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: `Email sent to ${donor.email}` });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

module.exports = router;
