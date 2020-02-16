const router = require('express').Router();

// @route   POST auth/login
// @desc    ---
// @access  Private
router.get('/login', (req, res) => {
  res.json({msg: 'to login screen'})
});

router.get('/google', (req, res) => {
  // Passport interactions handling
});

router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

module.exports = router;