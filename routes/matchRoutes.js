const express = require('express');
const router = express.Router();
const { createMatch, getAllMatches } = require('../controllers/matchController');

// Create a new match
router.post('/createMatch', createMatch);

module.exports = router;
