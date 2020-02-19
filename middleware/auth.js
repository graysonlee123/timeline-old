module.exports = function(req, res, next) {
  const token = req.session.passport;

  if (!token)
    res.status(401).json({
      msg: "You are unauthorized to perform this action."
    });

  // If the function reaches here, the user is authenticated
  next();
};
