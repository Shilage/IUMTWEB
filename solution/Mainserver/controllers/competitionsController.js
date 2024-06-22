const {competitionsService } = require("../services")

const getCompetitions = async(req, res, next) => {
    try {
        const competitions = await competitionsService.getCompetitions(req, res);
        res.send(competitions);
        next();
    } catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getSelectedCompetitions = async(req, res, next) => {
    try {
        const competitions = await competitionsService.getSelectedCompetitions(req, res);
        res.send(competitions);
        next();
    } catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getCompetitionsByName = async(req,res,next) =>{
    try{
        const letter = req.query.letter;
        if (!letter)
            return res.status(400).send({ error: 'Parameter is missing' });
        const competitions = await competitionsService.getCompetitionsByName(letter);
        res.send(competitions);
        next();
    }catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getCompetitionById = async(req,res,next) =>{
    try{
        const id = req.query.id;
        if (!id)
            return res.status(400).send({ error: 'Parameter is missing' });
        const competition = await competitionsService.getCompetitionById(id);
        res.send(competition);
        next();
    }catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {getCompetitions,getCompetitionsByName, getSelectedCompetitions, getCompetitionById}