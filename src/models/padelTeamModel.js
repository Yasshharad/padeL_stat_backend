const mongoose = require('mongoose');

const PadelTeamSchema = mongoose.Schema({
    teamName: String,
    matchesPlayed: Number,
    breakPoints: Number,
    possibleBreakPoints: Number,
    breakPointsSaved: Number,
    aces: Number,
    forcedErrors: Number,
    unforcedErrors: Number,
    faults: Number,
    doubleFaults: Number,
    firstServePercentage: Number,
    totalGamesWon: Number,
    totalGamesWonPercentage: Number,
    totalSetsWon: Number,
    firstServePointsWon: Number,
    firstServePointsWonPercentage: Number,
    secondServePointsWon: Number,
    secondServePointsWonPercentage: Number,
    serviceGamesWon: Number,
    serviceGamesWonPercentage: Number
});

module.exports = mongoose.model('PadelTeam', PadelTeamSchema);
