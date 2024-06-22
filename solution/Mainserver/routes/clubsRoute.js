const express = require('express')
//Importing only one module thanks to pointing only to ./controllers
// that recovers the index.js file in the controllers folder
const { clubsController, competitionsController} = require('../controllers')

const router = express.Router();

router.post('/getClubs', clubsController.getClubs);
router.get('/getClubs', clubsController.getClubss)
router.get('/getClubsFromCompetition', clubsController.getClubsFromCompetition)
router.get('/getClubsByName', clubsController.getClubsByName)
router.get('/getClubById', clubsController.getClubById);


module.exports = router