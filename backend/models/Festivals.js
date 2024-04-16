const mongoose = require('mongoose');

const FestivalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date_start: {
    type: Date,
    required: true
  },
  date_end: {
    type: Date,
    required: true
  },
  location: {
    type: String,
  },
  organizer: {
    type: String
  },
  genre: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Festival = mongoose.model('festival', FestivalSchema);