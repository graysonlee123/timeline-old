const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');

passport.use(new GoogleStrategy({
    // Options for the strategy

}), () => {
    // Passport callback function
})