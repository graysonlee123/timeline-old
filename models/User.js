const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    requird: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: "http://localhost:3000/default-avatar.png"
  },
  gender: {
    type: String,
    default: 'none'
  }
});

module.exports = User = mongoose.model('user', UserSchema);