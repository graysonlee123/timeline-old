const router = require("express").Router();
const passport = require("passport");
const validator = require("../middleware/auth");
const User = require('../models/User');
const Event = require('../models/Event');

// @route   GET auth/google
// @desc    Gets the Google login screen
// @access  Private
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ['profile']
  })
);

// @route   GET auth/google/redirect
// @desc    Callback for google to redirect to. Grabs code from Google.
// @access  Private
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    console.log(req.session);
    res.redirect('http://localhost:3000/home')
  }
);

// @route   GET auth/validate
// @desc    A simple URL to check if the user is authenticated
// @access  Private
router.get("/validate", validator, async (req, res) => {
  const {user: userId} = req.session.passport;

  try {
    const user = await User.findById(userId);
    const events = await Event.find({userId: userId});

    const payload = {
      dbUser: user,
      dbEvents: events
    }

    console.log('Validation payload for redux: ', payload);

    res.status(200).json(payload);
  } catch(err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

module.exports = router;
