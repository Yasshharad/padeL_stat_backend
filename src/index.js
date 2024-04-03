const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const padelTeamRoutes = require('./routes/padelTeamRoutes');
const padelPlayerRoutes = require('./routes/padelPlayerRoutes');
const ConnectDB = require('./database/connection');
const padelMatchStatRoutes = require('./routes/padelMatchStatRoutes');

dotenv.config();

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1/padel-team-stat', padelTeamRoutes);
app.use('/api/v1/padel-player-stat', padelPlayerRoutes);
app.use('/api/v1/padel-match-stat', padelMatchStatRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log(`Server is running on port ${PORT}`);
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed...");
            console.log(error);
        });
});
