module.exports = function (req, res, next) {
  // TODO: Write an ACTUAL middleware
  const authenticated = true;

  if (authenticated) {
    next();
  } else {
    res.status(401).json({msg: 'auth.js is set to false for development'})
  }
}