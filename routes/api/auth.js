const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/auth
// @desc    Find user by token
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    res.json({
      user: '123312131314v1v42v4'
    });
  } catch(err) {
    console.error(err.message);
    res.status(500).send(`Server Error!`)
  }
});

module.exports = router;