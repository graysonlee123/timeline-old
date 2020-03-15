const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    default: 'Not Specified'
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);