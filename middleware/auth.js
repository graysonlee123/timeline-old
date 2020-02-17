module.exports = function(req, res, next) {
    const token = req.session.passport;

    if (!token) return res.status(401).json({msg: 'You are unauthorized to perform this action.', status: 401});

    // If the function reaches here, the user is authenticated
    next();
}