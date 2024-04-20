const PadelMatchStat = require('../models/padelMatchStatModel');

// add padel match
exports.addPadelMatchStat = async (req, res) => {
    try {
        const {
            teamOneId,
            teamTwoId,
            breakPoints,
            possibleBreakPoints,
            breakPointsSaved,
            aces,
            forcedErrors,
            unforcedErrors,
            faults,
            doubleFaults,
            firstServePercentage,
            totalGamesWon,
            totalSetsWon,
            firstServePointsWon,
            firstServePointsWonPercentage,
            serviceGamesWon,
            serviceGamesWonPercentage
        } = req.body;

        const padelMatchStat = new PadelMatchStat({
            teamOneId,
            teamTwoId,
            breakPoints,
            possibleBreakPoints,
            breakPointsSaved,
            aces,
            forcedErrors,
            unforcedErrors,
            faults,
            doubleFaults,
            firstServePercentage,
            totalGamesWon,
            totalSetsWon,
            firstServePointsWon,
            firstServePointsWonPercentage,
            serviceGamesWon,
            serviceGamesWonPercentage
        });

        const savedPadelMatchStat = await padelMatchStat.save();

        res.status(201).json(savedPadelMatchStat);
    } catch (error) {
        console.error('Error adding padel match stat:', error);
        res.status(500).json({ error: 'Failed to add padel match stat' });
    }
};

// get padel match by id
exports.getPadelMatchStatById = async (req, res) => {
    try {
        const padelMatchStatId = req.params.padelMatchStatId;

        const padelMatchStat = await PadelMatchStat.findById(padelMatchStatId);

        if (!padelMatchStat) {
            return res.status(404).json({ error: 'Padel match stat not found' });
        }

        res.json(padelMatchStat);
    } catch (error) {
        res.status(500).json({ error: 'Please Enter Valid Id' });
    }
};

// update padel match stat
exports.updatePadelMatchStat = async (req, res) => {
    try {
        const { padelMatchStatId } = req.params;
        const updateFields = req.body;

        const updatedPadelMatchStat = await PadelMatchStat.findByIdAndUpdate(
            padelMatchStatId,
            updateFields,
            { new: true }
        );

        if (!updatedPadelMatchStat) {
            return res.status(404).json({ error: 'Padel match stat not found' });
        }

        res.json(updatedPadelMatchStat);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete padel match stat by ID
exports.deletePadelMatchStat = async (req, res) => {
    try {
        const { padelMatchStatId } = req.params;

        await PadelMatchStat.findByIdAndDelete(padelMatchStatId);

        res.json({ message: 'Padel match stat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting Padel match stat' });
    }
};

// Get all padel match stats
exports.getAllPadelMatchStats = async (req, res) => {
    try {
        const padelMatchStats = await PadelMatchStat.find();

        res.json(padelMatchStats);
    } catch (error) {
        res.status(500).json({ error: 'Unable to find any match' });
    }
};