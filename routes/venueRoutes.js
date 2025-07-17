
const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController');
const { authMiddleware } = require('../middleware/auth');

router.get('/venues', authMiddleware(['admin', 'user']), venueController.getAllVenues);
router.post('/venues', authMiddleware(['admin']), venueController.addVenue);
router.post('/venues/:id/block', authMiddleware(['admin']), venueController.blockDate);

module.exports = router;

