const express = require("express");
const router = express.Router();
const passport = require('passport');
const Event = require("../models/Event");

const validator = require('../middleware/auth');

// @route   /event
// @desc    Post a new event
// @auth    Yes
router.post(
  "/",
  validator,
  (req, res) => {
    const { user } = req.session.passport;
    const { name, date, description } = req.body;

    new Event({
      name: name,
      date: date,
      description: description,
      userId: user
    })
      .save()
      .then(newEvent => res.json(newEvent))
      .catch(err => {
        res.status(400).json(err);
        console.log('/event POST error:', err);
      });
  }
);

module.exports = router;
