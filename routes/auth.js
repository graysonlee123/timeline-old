const router = require("express").Router();
const passport = require("passport");
const validator = require("../middleware/auth");

// @route   GET auth/google
// @desc    Gets the Google login screen
// @access  Private
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get("/test", () => {
  console.log("TEST LINK HIT");
});

// @route   GET auth/google/redirect
// @desc    Callback for google to redirect to. Grabs code from Google.
// @access  Private
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

// @route   GET auth/validate
// @desc    A simple URL to check if the user is authenticated
// @access  Private
router.get("/validate", validator, (req, res) => {
  res.status(200).json(req.session.passport);
});

router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

module.exports = router;
