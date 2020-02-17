const cookieSession = require('cookie-session');

module.exports = function(req, res, next) {
    const token = req.session.passport;
    console.log(req.session);

    if (!token) return res.status(401).json({msg: 'You are not authorized.'})

    // If the function reaches here, the user is authenticated
    next();
}