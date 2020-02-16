const router = require('express').Router();

// @route   POST auth/login
// @desc    ---
// @access  Private
router.get('/login', (req, res) => {
  res.json({msg: 'to login screen'})
});

// router.get('/login/google', (req, res) => {
//   res.json({msg: 'Logging in with Google...'});
// });

// @route   GET auth/google
// @desc    Callback for google to redirect to. Grabs code from Google.
// @access  Public
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