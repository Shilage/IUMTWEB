const {
    clubGamesService
} = require("../services")



const getClubGames = async (req, res, next) => {

    try {
        const data = await clubGamesService.getClubGames();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


const getClubGameById = async (req, res, next) => {

    try {

        const id = req.query.id;
        
        if (!id) 
            return res.status(400).send({ error: 'Club game ID is missing' });

        if(id>0)
        {            
            const data = await clubGamesService.getClubGameById(id);
            res.send(data);
        }else
            res.send({
                error:"Invald club game ID"
            })        
        
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}



module.exports = {
    getClubGames,
    getClubGameById
}