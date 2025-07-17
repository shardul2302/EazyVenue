
const Venue = require('../models/Venue');
const Booking = require('../models/Booking');

exports.bookVenue = async (req, res) => {
  const { venueId, bookingDate } = req.body;
  const venue = await Venue.findById(venueId);

  const date = new Date(bookingDate);
  const isBlocked = venue.blockedDates.some(d => d.toISOString() === date.toISOString());

  if (isBlocked) return res.status(400).json({ message: 'Date unavailable' });

  await new Booking({ venueId, userId: req.user.id, bookingDate: date }).save();
  await Venue.findByIdAndUpdate(venueId, { $addToSet: { blockedDates: date } });

  res.json({ message: 'Venue booked' });
};
