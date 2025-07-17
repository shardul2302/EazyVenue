
const Venue = require('../models/Venue');

exports.getAllVenues = async (req, res) => {
  const venues = await Venue.find();
  res.json(venues);
};

exports.addVenue = async (req, res) => {
  const venue = new Venue(req.body);
  await venue.save();
  res.json({ message: 'Venue added' });
};

exports.blockDate = async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  await Venue.findByIdAndUpdate(id, { $addToSet: { blockedDates: new Date(date) } });
  res.json({ message: 'Date blocked' });
};
