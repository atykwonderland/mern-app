const mongoose = require('mongoose');

const FestivalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: [
    {
      type: Date,
      required: true
    },
    {
      type: Date,
      required: true
    }
  ],
  location: {
    type: String,
    required: true
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