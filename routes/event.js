const express = require("express");
const router = express.Router();
const db = require("../models");

const validator = require("../middleware/auth");
const { check, validationResult, sanitizeBody } = require("express-validator");

// @route   POST /event
// @desc    Post event using session user ID
// @access  Private
router.post(
  "/",
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

// @route   GET /event/my-events
// @desc    Get the user's events
// @access  Private
router.get('/my-events', validator, async (req, res) => {
  const { user } = req.session.passport;

  try {
    const events = await db.Event.find({userId: user});

    res.json(events);
  } catch {
    
  }

  // res.json([
  //   {
  //     userId: '123',
  //     date: Date.now(),
  //     name: 'Event Name 2',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
  //     tags: ['Tag 1', 'Tag 2']
  //   }])
});

module.exports = router;
