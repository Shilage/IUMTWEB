const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require("axios");


/**
 * GET a list of all games.
 *
 * @route GET /getGames
 * @returns {JSON} An array of all game objects.
 */
router.get('/getGames', function (req, res) {
    axios.get('http://localhost:3000/games/getGames')
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({error: 'Internal Server Error'});
        });
})
module.exports = router;

/**
 * GET a list of games for a specific club by club ID.
 *
 * @route GET /clubGamesById/:clubId
 * @param {number} clubId - The ID of the club.
 * @returns {JSON} An array of game objects for the specified club ID.
 */
router.get('/clubGamesById/:clubId', function (req, res) {
    const clubId = req.params.clubId;

    axios.get(`http://localhost:3000/games/clubGamesById/${clubId}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error("Error in Axios request:", error.message);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({error: 'Internal Server Error'});
        });
});

module.exports = router;