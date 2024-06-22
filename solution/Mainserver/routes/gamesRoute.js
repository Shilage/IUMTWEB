const express = require('express')
const { gamesController } = require('../controllers')

const router = express.Router();

router.post('/getGames', gamesController.getGames);
router.get('/getGameDetails', gamesController.getGameDetails);
router.post('/getLastGames', gamesController.getLastGames);
router.get('/getGamesByCompetition', gamesController.getGamesByCompetition);
router.get('/getGameById', gamesController.getGameById);

module.exports = router