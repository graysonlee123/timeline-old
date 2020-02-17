const express = require("express");
const router = express.Router();
const passport = require('passport');
const Event = require("../models/Event");

// @route   /event
// @desc    Post a new event
// @auth    Yes
router.post(
  "/",
  (req, res) => {
    console.log("Detected user: ", req.session.passport.user);

    const { name, date, description } = req.body;

    new Event({
      name: name,
      date: Date.now(),
      description: description
    })
      .save()
      .then(newEvent => res.json(newEvent))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
);

module.exports = router;
