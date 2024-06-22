const {
    clubsService
} = require("../services")

const getClubs = async (req, res, next) => {
    
    try {
        const data = await clubsService.getClubs(req, res);
        console.log("Data==>",data)
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        // res.sendStatus(500) && next(error)
        res.sendStatus(500) && next(e)
    }
}
const getClubss = async (req, res, next) => {
    try {
        const data = await clubsService.getClubss(req, res);
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getClubsFromCompetition = async (req, res, next) => {
    try {
        let compid = req.query.compid;
        if (!compid)
            return res.status(400).send({error: 'Parameter is missing'});
        const data = await clubsService.getClubsFromCompetition(compid);
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getClubsByName = async (req, res, next) => {
    try {
        const letter = req.query.letter;
        if (!letter)
            return res.status(400).send({error: 'Parameter is missing'});
        const clubs = await clubsService.getClubsByName(letter);
        res.send(clubs);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getClubById = async(req,res,next) =>{
    try{
        const id = req.query.id;
        if (!id)
            return res.status(400).send({ error: 'Parameter is missing' });
        const club = await clubsService.getClubById(id);
        res.send(club);
        next();
    }catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    getClubs,
    getClubss,
    getClubsFromCompetition,
    getClubsByName,
    getClubById
}