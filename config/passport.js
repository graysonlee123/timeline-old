const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.SECRET,
    callbackURL: '/auth/google/redirect'
}, (accesstoken, refreshToken, profileInformation, done) => {
    new User ({
        username: profileInformation.displayName,
        googleId: profileInformation.id
    }).save().then((newUser) => {
        console.log('New user created!', newUser)
    })
    }
));
