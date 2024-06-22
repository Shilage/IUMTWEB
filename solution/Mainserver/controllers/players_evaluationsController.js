const {players_evaluationsService } = require("../services")

const getPlayers_Evaluations = async(req, res, next) => {
    try {
        const players_evaluations = await players_evaluationsService.getPlayers_Evaluations(req, res);
        res.send(players_evaluations);
        next();
    } catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {getPlayers_Evaluations}