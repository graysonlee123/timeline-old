const router = require('express').Router();
const passport = require('passport');

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

// @route   GET auth/google/redirect
// @desc    Callback for google to redirect to. Grabs code from Google.
// @access  Private
router.get('/google/redirect',
  passport.authenticate('google'),
  (req, res) => {
    res.send('you reached the callback uri')
  }
)

router.get("/logout", (req, res) => {
  // handle with passport
  res.send('logging out');
});

module.exports = router;