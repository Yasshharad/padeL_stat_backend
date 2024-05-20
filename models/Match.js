const mongoose = require('mongoose');

const matchSetSchema = new mongoose.Schema({
    teamScore: {
        type: Number,
        required: true
    },
    opponentScore: {
        type: Number,
        required: true
    }
});

const matchSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    opponentTeam: {
        type: String,
        required: true
    },
    sportsName: {
        type: String,
        required: true,
        enum: ['Padel'] // Add other sports if needed
    },
    format: {
        type: String,
        required: true,
        enum: ['Singles', 'Doubles']
    },
    matchSetsScore: [matchSetSchema],
    result: {
        type: String
    }
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
