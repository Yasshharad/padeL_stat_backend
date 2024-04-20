const mongoose = require('mongoose');

const PadelTeamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    matchesPlayed: {
        type: Number,
        required: true
    },
    breakPoints: {
        type: Number,
        required: true
    },
    possibleBreakPoints: {
        type: Number,
        required: true
    },
    breakPointsSaved: {
        type: Number,
        required: true
    },
    aces: {
        type: Number,
        required: true
    },
    forcedErrors: {
        type: Number,
        required: true
    },
    unforcedErrors: {
        type: Number,
        required: true
    },
    faults: {
        type: Number,
        required: true
    },
    doubleFaults: {
        type: Number,
        required: true
    },
    firstServePercentage: {
        type: Number,
        required: true
    },
    totalGamesWon: {
        type: Number,
        required: true
    },
    totalGamesWonPercentage: {
        type: Number,
        required: true
    },
    totalSetsWon: {
        type: Number,
        required: true
    },
    firstServePointsWon: {
        type: Number,
        required: true
    },
    firstServePointsWonPercentage: {
        type: Number,
        required: true
    },
    secondServePointsWon: {
        type: Number,
        required: true
    },
    secondServePointsWonPercentage: {
        type: Number,
        required: true
    },
    serviceGamesWon: {
        type: Number,
        required: true
    },
    serviceGamesWonPercentage: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('PadelTeam', PadelTeamSchema);
