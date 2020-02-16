const router = require('express').Router();
const passport = require('passport');

// @route   GET auth/google
// @desc    Gets the Google login screen
// @access  Private
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

router.get('/test', () => {
  console.log('TEST LINK HIT')
})

// @route   GET auth/google/redirect
// @desc    Callback for google to redirect to. Grabs code from Google.
// @access  Private
router.get('/google/redirect',
  passport.authenticate('google', { failureRedirect: '/login', session: true}),
  (req, res) => {
    res.redirect('http://localhost:3000/timeline');
  }
)

router.get("/logout", (req, res) => {
  // handle with passport
  res.send('logging out');
});

module.exports = router;