const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'The event\'s name is required']
  },
  date: {
    type: Date,
    required: [true, 'The event\'s date is required']
  },
  description: {
    type: String,
    required: [true, 'The event\'s description is required']
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model('event', EventSchema);