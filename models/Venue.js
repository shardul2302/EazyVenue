const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number,
  blockedDates: [Date]
});

module.exports = mongoose.model('Venue', venueSchema);

