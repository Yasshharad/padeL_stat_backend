const express = require('express');
const router = express.Router();
const padelPlayerController = require('../controllers/padelPlayerController');

// Endpoint: POST /padel-player-stat/add-padel-player-stat
router.post('/add-padel-player-stat', padelPlayerController.addPadelPlayerStat);

// Endpoint: GET /padel-player-stat/get-padel-player-stat-by-id/:padelPlayerStatId
router.get('/get-padel-player-stat-by-id/:padelPlayerStatId', padelPlayerController.getPadelPlayerStatById);

// Update padel player stat
router.put('/update-padel-player-stat/:padelPlayerStatId', padelPlayerController.updatePadelPlayerStat);

// Delete padel player stat
router.delete('/delete-padel-player-stat/:padelPlayerStatId', padelPlayerController.deletePadelPlayerStat);

// Endpoint: GET /padel-player-stat/get-all-padel-player-stats
router.get('/get-all-padel-player-stats', padelPlayerController.getAllPadelPlayerStats);

module.exports = router;
