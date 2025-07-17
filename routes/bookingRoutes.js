
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authMiddleware } = require('../middleware/auth');

router.post('/book', authMiddleware(['user']), bookingController.bookVenue);

module.exports = router;
