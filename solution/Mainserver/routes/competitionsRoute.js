const express = require('express')
//Importing only one module thanks to pointing only to ./controllers
// that recovers the index.js file in the controllers folder
const { competitionsController } = require('../controllers')

const router = express.Router();

router.post('/getCompetitions', competitionsController.getCompetitions);
router.get('/getSelectedCompetitions', competitionsController.getSelectedCompetitions);
router.get('/getCompetitionsByName', competitionsController.getCompetitionsByName);
router.get('/getCompetitionById', competitionsController.getCompetitionById);


module.exports = router