const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult, body } = require('express-validator');

const User = require('../../models/User');

// TODO: Look into sanitization with express-validator
// TODO: https://express-validator.github.io/docs/sanitization.html

// * @route   POST api/user
// ? @desc    Register user
// ! @access  Public
router.post(
  '/',
  [
    check('first_name', 'First name is required')
      .not()
      .isEmpty(),
    check('last_name', 'Last name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail(),
    check('password', 'Password is required')
      .not()
      .isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6, max: 30 }),
    body('gender').custom(value => {
      const values = ['none', 'male', 'female', 'other'];

      if (values.indexOf(value) === -1) {
        throw new Error(`Gender should be ${values.join(', ')}`);
      }

      return true;
    })
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

// * @route   PUT api/user
// ? @desc    Update a user's data
// ! @access  Private
router.put(
  '/',
  [
    auth,
    [
      check('first_name', 'First name is required')
        .not()
        .isEmpty(),
      check('last_name', 'Last name is required')
        .not()
        .isEmpty(),
      check('email', 'Please include a valid email').isEmail().normalizeEmail(),
      body('gender').custom(value => {
        const values = ['none', 'male', 'female', 'other'];

        if (values.indexOf(value) === -1) {
          throw new Error(`Gender should be ${values.join(', ')}`);
        }

        return true;
      })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name, last_name, email, avatar, gender } = req.body;

    try {
      const dbUser = await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          first_name,
          last_name,
          email,
          avatar,
          gender
        }
      ).select('-password');

      res.json(dbUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// * @route   DELETE api/user
// ? @desc    Delete user and events
// ! @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    await Event.deleteMany({ userId: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User and events deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
