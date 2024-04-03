const express = require('express');
const router = express.Router();
const padelMatchStatController = require('../controllers/padelMatchStatController');

// add padel match
router.post('/add-padel-match-stat', padelMatchStatController.addPadelMatchStat);

// Endpoint: GET /padel-match-stat/get-padel-match-stat-by-id/:padelMatchStatId
router.get('/get-padel-match-stat-by-id/:padelMatchStatId', padelMatchStatController.getPadelMatchStatById);

// Endpoint: PUT /padel-match-stat/update-padel-match-stat/:padelMatchStatId
router.put('/update-padel-match-stat/:padelMatchStatId', padelMatchStatController.updatePadelMatchStat);

// Endpoint: DELETE /padel-match-stat/delete-padel-match-stat/:padelMatchStatId
router.delete('/delete-padel-match-stat/:padelMatchStatId', padelMatchStatController.deletePadelMatchStat);

// Endpoint: GET /padel-match-stat/get-all-padel-match-stats
router.get('/get-all-padel-match-stats', padelMatchStatController.getAllPadelMatchStats);

module.exports = router;