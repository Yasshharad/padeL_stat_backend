const PadelTeam = require('../models/padelTeamModel');


// add padel team stat
exports.addPadelTeamStat = async ({ body }, res) => {
    try {
        const {
            teamName,
            matchesPlayed,
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
            totalGamesWonPercentage,
            totalSetsWon,
            firstServePointsWon,
            firstServePointsWonPercentage,
            secondServePointsWon,
            secondServePointsWonPercentage,
            serviceGamesWon,
            serviceGamesWonPercentage
        } = body;

        const existingTeam = await PadelTeam.findOne({ teamName });

        if (existingTeam) {
            return res.status(400).json({ error: 'Team name already exists. Please choose a different name.' });
        }

        const padelTeam = new PadelTeam({
            teamName,
            matchesPlayed,
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
            totalGamesWonPercentage,
            totalSetsWon,
            firstServePointsWon,
            firstServePointsWonPercentage,
            secondServePointsWon,
            secondServePointsWonPercentage,
            serviceGamesWon,
            serviceGamesWonPercentage
        });

        const savedPadelTeam = await padelTeam.save();

        res.status(201).json(savedPadelTeam);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add padel team stat' });
    }
};


// get padel team by id
exports.getPadelTeamStatById = async (req, res) => {
    try {
        const padelTeamStatId = req.params.padelTeamStatId;

        const padelTeamStat = await PadelTeam.findById(padelTeamStatId);

        if (!padelTeamStat) {
            return res.status(404).json({ error: 'Padel team stat not found' });
        }

        res.json(padelTeamStat);
    } catch (error) {
        res.status(500).json({ error: 'Please enter correct ID' });
    }
};


// update padal team data
exports.updatePadelTeamStat = async (req, res) => {
    try {
        const { padelTeamStatId } = req.params;
        const updateFields = req.body;

        const updatedPadelTeamStat = await PadelTeam.findByIdAndUpdate(
            padelTeamStatId,
            updateFields,
            { new: true }
        );

        if (!updatedPadelTeamStat) {
            return res.status(404).json({ error: 'Padel team stat not found' });
        }

        res.json(updatedPadelTeamStat);
    } catch (error) {
        res.status(500).json({ error: 'Enter correct ID number' });
    }
};


// delete padal team
exports.deletePadelTeamStat = async (req, res) => {
    try {
        const { padelTeamStatId } = req.params;

        const padelTeam = await PadelTeam.findById(padelTeamStatId);

        if (!padelTeam) {
            return res.status(404).json({ error: 'Padel team stat not found' });
        }

        await PadelTeam.findByIdAndDelete(padelTeamStatId);

        res.json({ message: 'Padel team stat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// get all padel teams
exports.getAllPadelTeamStats = async (req, res) => {
    try {
        const padelTeamStats = await PadelTeam.find();

        const formattedPadelTeamStats = padelTeamStats.map(team => ({
            teamName: team.teamName,
            matchesPlayed: team.matchesPlayed,
            breakPoints: team.breakPoints,
            possibleBreakPoints: team.possibleBreakPoints,
            breakPointsSaved: team.breakPointsSaved,
            aces: team.aces,
            forcedErrors: team.forcedErrors,
            unforcedErrors: team.unforcedErrors,
            faults: team.faults,
            doubleFaults: team.doubleFaults,
            firstServePercentage: team.firstServePercentage,
            totalGamesWon: team.totalGamesWon,
            totalGamesWonPercentage: team.totalGamesWonPercentage,
            totalSetsWon: team.totalSetsWon,
            firstServePointsWon: team.firstServePointsWon,
            firstServePointsWonPercentage: team.firstServePointsWonPercentage,
            secondServePointsWon: team.secondServePointsWon,
            secondServePointsWonPercentage: team.secondServePointsWonPercentage,
            serviceGamesWon: team.serviceGamesWon,
            serviceGamesWonPercentage: team.serviceGamesWonPercentage
        }));

        res.json(formattedPadelTeamStats);
    } catch (error) {
        res.status(500).json({ error: "Unable to find any team" });
    }
};