const express = require("express");
const router = express.Router();
const db = require("../models");

const validator = require("../middleware/auth");
const { check, validationResult, sanitizeBody } = require("express-validator");

// @route   /event/:id
// @desc    Post event by user ID
// @auth    Yes
router.post(
  "/:id",
  validator,
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isLength({ min: 3 })
      .withMessage("Event name must be more than 3 characters")
      .isLength({max: 20 })
      .withMessage('Event name must be less than 20 characters'),
      // Check for isDate()?
      check("date")
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isString(),
      check("description")
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isLength({ min: 10 })
      .withMessage("Event description must be more than 10 characters")
      .trim()
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
    };

    db.Event.create(newEvent)
      .then(dbEvent => {
        res.json({
          msg: "Successfully added new event!",
          body: dbEvent
        });
      })
      .catch(err => {
        res.status(400).json({
          msg: "Not added succesfully!"
        });
      });
  }
);

module.exports = router;
