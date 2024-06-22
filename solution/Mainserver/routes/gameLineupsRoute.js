const express = require('express')

const { gameLineupsController } = require('../controllers')

const router = express.Router();

router.post('/getGameLineups', gameLineupsController.getGameLineups);
router.get('/getGameLineupById', gameLineupsController.getGameLineupById);


module.exports = router