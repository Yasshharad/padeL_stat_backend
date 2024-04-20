const express = require('express');
const router = express.Router();
const padelTeamController = require('../controllers/padelTeamController');

// Endpoint: POST /api/v1/padel-teams (with versioning and RESTful naming)
router.post('/add-padel-team-stat', padelTeamController.addPadelTeamStat);

// Endpoint: GET /padel-team-stat/get-padel-team-stat-by-id/:padelTeamStatId
router.get('/get-padel-team-stat-by-id/:padelTeamStatId', padelTeamController.getPadelTeamStatById);

// Endpoint: PUT /padel-team-stat/update-padel-team-stat/:padelTeamStatId
router.put('/update-padel-team-stat/:padelTeamStatId', padelTeamController.updatePadelTeamStat);

// Endpoint: DELETE /padel-team-stat/delete-padel-team-stat/:padelTeamStatId
router.delete('/delete-padel-team-stat/:padelTeamStatId', padelTeamController.deletePadelTeamStat);

// Endpoint: GET /padel-team-stat/get-all-padel-team-stats
router.get('/get-all-padel-team-stats', padelTeamController.getAllPadelTeamStats);

module.exports = router;
