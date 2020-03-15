const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Event = require('../../models/Event');

// TODO: Add more validators for length, etc on posting an event

// * @route   POST api/event
// ? @desc    Add a new event
// ! @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Event name is required')
        .not()
        .isEmpty(),
      check('date', 'Date is required')
        .not()
        .isEmpty(),
      check('description', 'Description is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await (await User.findById(req.user.id)).isSelected('-password');
      
      const {name, date, description} = req.body;

      const newEvent = new Event({
        name: name,
        date: date,
        description: description,
        userId: req.user.id
      });

      const event = await newEvent.save();

      res.json({ event });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// * @route   POST api/event
// ? @desc    Update an existing event
// ! @access  Private
router.post('/', auth, async (req, res) => {
  // TODO: Update this to work

  const { name, date, description, userId, id } = req.body;

  try {
    let event = await Event.findOne({ id: id, userId: req.user.id });

    if (!event) {
      return res.status(400).json({ errors: [{ msg: 'Event not found' }] });
    }

    res.json({ event });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
