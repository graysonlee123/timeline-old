const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const Event = require('../../models/Event');
const User = require('../../models/User');

// * @route   GET api/profile/me
// ? @desc    Get current user's profile
// ! @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id});

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile.populate('user', ['date']));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// * @route   POST api/profile
// ? @desc    Create or update a profile
// ! @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('gender', 'Gender is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { gender } = req.body;

    const profileFields = {
      gender,
      date: Date.now()
    };

    try {
      // ? Using the upsert option, which makes a new doc if none found
      let profile = await Profile.findOneAndUpdate(
        { userId: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
