const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create event schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  date: {
      type: Date,
      default: Date.now
  }
});

// Create model
const User = mongoose.model('user', UserSchema);

module.exports = User;
