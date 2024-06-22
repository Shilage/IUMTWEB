const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require("axios");

/**
 * GET a filtered list of players based on team.
 *
 * @route GET /get-player-by-team
 * @param {string} filter - Query param to filter players by team.
 * @returns {JSON} An array of player objects filtered by team.
 */
router.get('/getPlayersByClub', function(req, res) {
    const { filter } = req.query;
    axios.get(`http://localhost:8444/getPlayersByClub?filter=${filter}`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})


/**
 * GET a list of all players.
 *
 * @route GET /getPlayers
 * @returns {JSON} An array of all player objects.
 */
router.get('/getPlayers', function(req, res) {
    axios.get(`http://localhost:8444/getPlayers`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})
/**
 * GET a filtered list of players based on player ID.
 *
 * @route GET /get-player-by-playerId
 * @param {string} filter - Query param to filter players by player ID.
 * @returns {JSON} An array of player objects filtered by player ID.
 */
router.get('/getPlayerById', function(req, res) {
    const { filter } = req.query;
    axios.get(`http://localhost:8444/getPlayerById?filter=${filter}`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})
module.exports = router;

/**
 * GET a list of player appearances filtered by player ID.
 *
 * @route GET /getAppearancesByPlayerId/:player_id
 * @param {number} player_id - The ID of the player.
 * @returns {JSON} An array of appearance objects for a specific player.
 */
router.get('/getAppearancesByPlayerId/:player_id', function(req, res) {
    const player_id = req.params.player_id;
    axios.get(`http://localhost:3000/appearances/getAppearancesByPlayerId/${player_id}`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})
module.exports = router;
/**
 * GET a list of player appearances filtered by game ID.
 *
 * @route GET /getAppearancesByGameId/:game_id
 * @param {number} game_id - The ID of the game.
 * @returns {JSON} An array of appearance objects for a specific game.
 */
router.get('/getAppearancesByGameId/:game_id', function(req, res) {
    const game_id = req.params.game_id;

    axios.get(`http://localhost:3000/appearances/getAppearancesByGameId/${game_id}`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error APPEARANCES BY ID' });
        });
})
module.exports = router;