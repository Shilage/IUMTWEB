const express = require('express')
//Importing only one module thanks to pointing only to ./controllers
// that recovers the index.js file in the controllers folder
const { players_evaluationsController } = require('../controllers')

const router = express.Router();

router.post('/getPlayers_Evaluations', players_evaluationsController.getPlayers_Evaluations);

module.exports = router