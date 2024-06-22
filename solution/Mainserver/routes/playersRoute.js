const express = require('express')
//Importing only one module thanks to pointing only to ./controllers
// that recovers the index.js file in the controllers folder
const { playersController, clubsController} = require('../controllers')

const router = express.Router();

router.get('/getPlayers', playersController.getPlayers);
router.get('/getPlayerById', playersController.getPlayerById);
router.get('/getPlayersByClubId', playersController.getPlayersByClubId);
router.get('/getPlayersByName', playersController.getPlayersByName);


module.exports = router