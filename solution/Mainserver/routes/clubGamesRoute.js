const express = require('express')
//Importing only one module thanks to pointing only to ./controllers
// that recovers the index.js file in the controllers folder
const { clubGamesController } = require('../controllers')

const router = express.Router();

router.post('/getClubGames', clubGamesController.getClubGames);
router.get('/getClubGameById', clubGamesController.getClubGameById);


module.exports = router