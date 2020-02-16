const express = require('express');
const router = express.Router();
const passport = require('passport');

// @route   POST api/login
// @desc    ---
// @access  Private
// router.post('/',
//   // passport.authenticate('true'),
//   (req, res) => {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.json({
//       msg: 'Success'
//     });
//     // res.redirect('/users/' + req.user.username);
//   });

module.exports = router;