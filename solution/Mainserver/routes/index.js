const express = require('express');

const clubsRoutes = require('./clubsRoute');
const routerClubs = express.Router();
routerClubs.use('/clubs', clubsRoutes);

const playersRoutes = require('./playersRoute');
const routerPlayers = express.Router();
routerPlayers.use('/players', playersRoutes);

const gamesRoutes= require('./gamesRoute')
const routerGames = express.Router();
routerPlayers.use('/games', gamesRoutes);

const competitionsRoutes = require('./competitionsRoute');
const routerCompetitions = express.Router();
routerCompetitions.use('/competitions', competitionsRoutes);

const playersValuationsRoutes = require('./players_evaluationsRoute');
const routerPlayersValuations = express.Router();
routerPlayersValuations.use('/player_evaluations', playersValuationsRoutes);


const appearencesRoutes = require('./appearencesRoute');
const routerAppearences = express.Router();
routerPlayersValuations.use('/appearences', appearencesRoutes);

const clubGamesRoutes= require('./clubGamesRoute')
const routerClubGames= express.Router();
routerClubGames.use('/clubGames', clubGamesRoutes)

const gameEventsRoutes= require('./gameEventsRoute')
const routerGameEvents= express.Router();
routerGameEvents.use('/gameEvents', gameEventsRoutes)

const gameLineupsRoutes= require('./gameLineupsRoute')
const routerGameLineups= express.Router();
routerGameLineups.use('/gameLineups', gameLineupsRoutes)

module.exports = [
    routerClubs,
    routerPlayers,
    routerGames,
    routerPlayersValuations,
    routerCompetitions,
    routerAppearences,
    routerClubGames,
    routerGameEvents,
    routerGameLineups,
];