const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create event schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The event name is required']
  },
  date: {
    type: Date,
    required: [true, 'The event date is required']
  },
  description: {
    type: String,
    required: [true, 'The event description is required']
  }
});

// Create model
const Event = mongoose.model('event', EventSchema);

module.exports = Event;
