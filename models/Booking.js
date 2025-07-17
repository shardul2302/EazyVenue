const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  venueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookingDate: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
