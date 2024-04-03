const PadelPlayer = require('../models/padelPlayerModel');

// Add Padel Player Stat
exports.addPadelPlayerStat = async (req, res) => {
    try {
        const {
            name,
            aces,
            faults,
            doubleFaults,
            firstServePercentage,
            firstServePointsWon,
            firstServePointsWonPercentage,
            secondServePointsWon,
            secondServePointsWonPercentage
        } = req.body;

        const padelPlayer = new PadelPlayer({
            name,
            aces,
            faults,
            doubleFaults,
            firstServePercentage,
            firstServePointsWon,
            firstServePointsWonPercentage,
            secondServePointsWon,
            secondServePointsWonPercentage
        });

        const savedPadelPlayer = await padelPlayer.save();

        res.status(201).json(savedPadelPlayer);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Padel Player stat' });
    }
};

// Get padel player stat by ID
exports.getPadelPlayerStatById = async (req, res) => {
    try {
        const padelPlayerStatId = req.params.padelPlayerStatId;

        const padelPlayerStat = await PadelPlayer.findById(padelPlayerStatId);

        if (!padelPlayerStat) {
            return res.status(404).json({ error: 'Padel player stat not found' });
        }

        res.json(padelPlayerStat);
    } catch (error) {
        res.status(500).json({ error: 'Please enter valid id.' });
    }
};


// update padel player
exports.updatePadelPlayerStat = async (req, res) => {
    try {
        const { padelPlayerStatId } = req.params;
        const updateFields = req.body;

        const updatedPadelPlayerStat = await PadelPlayer.findByIdAndUpdate(
            padelPlayerStatId,
            updateFields,
            { new: true }
        );

        if (!updatedPadelPlayerStat) {
            return res.status(404).json({ error: 'Padel player stat not found' });
        }

        res.json(updatedPadelPlayerStat);
    } catch (error) {
        res.status(500).json({ error: 'Error updating padel player stat' });
    }
};


// delete padel player
exports.deletePadelPlayerStat = async (req, res) => {
    try {
        const { padelPlayerStatId } = req.params;

        const deletedPadelPlayerStat = await PadelPlayer.findByIdAndDelete(padelPlayerStatId);

        if (!deletedPadelPlayerStat) {
            return res.status(404).json({ error: 'Padel player stat not found' });
        }

        res.json({ message: 'Padel player stat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting padel player stat' });
    }
};


// Get all padel player stats
exports.getAllPadelPlayerStats = async (req, res) => {
    try {
        const padelPlayerStats = await PadelPlayer.find();

        res.json(padelPlayerStats);
    } catch (error) {
        res.status(500).json({ error: "Unable to find any player" });
    }
};