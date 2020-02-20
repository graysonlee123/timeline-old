const express = require("express");
const router = express.Router();
const db = require("../models");

const validator = require('../middleware/auth');
const { check, validationResult, sanitizeBody } = require('express-validator');

// @route   /event/:id
// @desc    Post event by user ID
// @auth    Yes
router.post(
  '/:id',
  validator,
  [
    check('name').not().isEmpty().isString(),
    // Check for isDate()?
    check('date').not().isEmpty().isString(),
    check('description').not().isEmpty().isString().trim()
  ],
  async (req, res) => {
    const { user } = req.session.passport;
    const { name, date, description } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } 

    const newEvent = {
      name: name,
      date: date,
      description: description,
      userId: user
    }

    db.Event.create(newEvent)
      .then(dbEvent => {
        res.json({
          msg: 'Successfully added new event!',
          body: dbEvent
        })
      })
      .catch(err => {
        res.status(400).json({
          msg: 'Not added succesfully!'
        })
      })

  }
);

module.exports = router;
