const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

require("dotenv").config();

passport.serializeUser((user, done) => {
  // Null for no error
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.SECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accesstoken, refreshToken, profileInformation, done) => {
      // Check if user already exists in database
      User.findOne({ googleId: profileInformation.id }).then(currentUser => {
        if (currentUser) {
          console.log('User already exists: ', currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profileInformation.displayName,
            googleId: profileInformation.id
          })
            .save()
            .then(newUser => {
              console.log("New user created!", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
