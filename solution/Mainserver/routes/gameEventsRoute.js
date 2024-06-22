const express = require('express')
//Importing only one module thanks to pointing only to ./controllers
// that recovers the index.js file in the controllers folder
const { gameEventsController } = require('../controllers')

const router = express.Router();

router.post('/getGameEvents', gameEventsController.getGameEvents);
router.get('/getGameEventById', gameEventsController.getGameEventById);


module.exports = router