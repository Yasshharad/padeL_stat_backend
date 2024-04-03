const mongoose = require('mongoose');

const PadelMatchStatSchema = mongoose.Schema({
    teamOneId: {
        type: String,
        required: true
    },
    teamTwoId: {
        type: String,
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
    serviceGamesWon: {
        type: Number,
        required: true
    },
    serviceGamesWonPercentage: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('PadelMatchStat', PadelMatchStatSchema);