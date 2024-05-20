const Match = require('../models/Match'); // Ensure the correct path to the model

// Function to calculate match result based on the scores of matchSetsScore
function calculateMatchResult(matchSetsScore, teamName, opponentTeam) {
    let teamMatchSetsScoreWon = 0;
    let opponentMatchSetsScoreWon = 0;

    // Iterate through each set to calculate total matchSetsScore won by each team
    matchSetsScore.forEach(set => {
        const { teamScore, opponentScore } = set;
        if (teamScore > opponentScore) {
            teamMatchSetsScoreWon++;
        } else if (teamScore < opponentScore) {
            opponentMatchSetsScoreWon++;
        }
    });

    // Check if a team has won two matchSetsScore (Best of three matchSetsScore)
    if (teamMatchSetsScoreWon >= 2) {
        return `${teamName} won the match`;
    } else if (opponentMatchSetsScoreWon >= 2) {
        return `${opponentTeam} won the match`;
    } else {
        return 'Not decided';
    }
}

exports.createMatch = async (req, res) => {
    try {
        const { teamName, opponentTeam, sportsName, format, matchSetsScore } = req.body;

        // Validate required fields
        if (!teamName || !opponentTeam || !sportsName || !format || !Array.isArray(matchSetsScore)) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        // Calculate match result based on the scorecard/scoring rules of Padel
        const result = calculateMatchResult(matchSetsScore, teamName, opponentTeam);

        const newMatch = new Match({
            teamName,
            opponentTeam,
            sportsName,
            format,
            matchSetsScore,
            result
        });

        await newMatch.save();

        res.status(201).json({ message: 'Match created successfully', match: newMatch });
    } catch (error) {
        console.error('Error creating match:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
