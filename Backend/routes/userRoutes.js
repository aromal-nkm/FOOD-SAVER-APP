const express = require('express');
const User = require('../models/userModel');
const router = express.Router();



// Register User
router.post('/register', async (req, res) => {
  const { uname, pwd } = req.body;

  try {
    const userExists = await User.findOne({ uname });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ uname, pwd });
    res.status(201).json({
      id: user._id,
      name: user.uname,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { uname, pwd } = req.body;

  try {
    const user = await User.findOne({ uname,pwd });
    if (user) {
      res.json({message:'login success',
        id: user._id,
        name: user.uname,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
