const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// * @route   POST api/user
// ? @desc    Register user
// ! @access  Public
router.post(
  '/',
  [
    check('first_name', 'First name is required')
      .not()
      .isEmpty(),
    check('last_name', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6, max: 30 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name, last_name, email, password, avatar, gender } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        first_name,
        last_name,
        email,
        password,
        avatar,
        gender
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// * @route   DELETE api/user
// ? @desc    Delete profile, user, and events
// ! @access  Private
router.delete('/', auth, async(req, res) => {
  try {
    await Event.deleteMany({ userId: req.user.id });
    await Profile.findOneAndRemove({ userId: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User, profile, and posts deleted'})
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
