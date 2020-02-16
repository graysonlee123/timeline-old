const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create event schema
const UserSchema = new Schema({
  googleId: String,
  username: String
});

// Create model
const User = mongoose.model('user', UserSchema);

module.exports = User;
