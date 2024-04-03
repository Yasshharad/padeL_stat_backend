const mongoose = require('mongoose');

const PadelPlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensures unique player names
    },
    aces: {
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
    }
});

module.exports = mongoose.model('PadelPlayer', PadelPlayerSchema);
