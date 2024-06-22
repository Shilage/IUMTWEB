const express = require('express')
//puntando a '../controllers' recupera il file index.js in /controllers che a sua evolta espone userController. In questo modo importo un solo modulo
const { appearencesController } = require('../controllers')

const router = express.Router();

router.post('/getAppearences', appearencesController.getAppearences);
router.get('/getAppearenceById', appearencesController.getAppearenceById);
router.get('/getMainAppearences', appearencesController.getMainAppearences);



module.exports = router