const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const PORT = process.env.PORT || 5000;

const app = express();
const db = mongoose.connection;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize passport sessions
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// Setup cookie sessions
// 'maxAge' in milliseconds
app.use(cookieSession({
  name: 'session',
  maxAge: (24 * 60 * 60 * 1000),
  keys: [process.env.COOKIE_KEY]
}));

// Connect to our database
mongoose
  .connect(encodeURI(process.env.DB), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// Helps with CORS when accessing the API from different domains
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin',
//     'X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use('/api', require('./routes/api'));
app.use('/event', require('./routes/event'));
app.use('/auth', require('./routes/auth'));

// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
    console.log('Connected to the database!');

    app.listen(PORT, function () {
        console.log(`Server running on port ${PORT}`);
    });
});
