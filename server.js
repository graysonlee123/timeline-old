const express = require('express');
const connectDB = require('./config/connectDB');
const path = require('path');

const app = express();
require('dotenv').config();

// Connect database
connectDB();

// Init middleware
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/api/auth'));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(__dirname, 'client', 'build', 'index.html');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
});