const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require("axios");



/**
 * GET a list of teams participating in a specific competition.
 *
 * @route GET /getClubsByCompetitions
 * @param {string} filterCompetition - Query param to filter teams by competition.
 * @returns {JSON} An array of team objects participating in the specified competition.
 */
router.get('/getClubsByCompetitions', function (req, res) {
    const { filterCompetition } = req.query;
    axios.get(`http://localhost:8444/getClubsByCompetitions?filterCompetition=${filterCompetition}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

/**
 * GET a list of teams based on season and country.
 *
 * @route GET /clubsBySeasonAndCountry
 * @param {string} filterCountry - Query param to filter teams by country.
 * @param {string} filterSeason - Query param to filter teams by season.
 * @returns {JSON} An array of team objects filtered by country and season.
 */
router.get('/clubsBySeasonAndCountry', function (req, res) {

    const { filterCountry, filterSeason } = req.query;

    axios.get(`http://localhost:8444/clubsBySeasonAndCountry?filterCountry=${filterCountry}&filterSeason=${filterSeason}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
/**
 * GET a list of teams categorized by country.
 *
 * @route GET /getClubsCountry
 * @returns {JSON} An array of team objects categorized by country.
 */
router.get('/getClubsCountry', function(req, res) {
    axios.get(`http://localhost:8444/getClubsCountry`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})
/**
 * GET a list of club seasons.
 *
 * @route GET /getClubSeason
 * @returns {JSON} An array of club season objects.
 */
router.get('/getClubSeason', function(req, res) {
    axios.get(`http://localhost:8444/getClubSeason`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})
module.exports = router;