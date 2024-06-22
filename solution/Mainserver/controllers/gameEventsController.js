const {
    gameEventsService
} = require("../services")

const getGameEvents = async (req, res, next) => {

    try {
        const data = await gameEventsService.getGameEvents();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


const getGameEventById = async (req, res, next) => {
    try {
        const id = req.query.id;
        if (!id) 
            return res.status(400).send({ error: 'Game event ID is missing' });

        if(id.length===32)
        {            
            const data = await gameEventsService.getGameEventById(id);
            res.send(data);
        }else 
            res.send({
                error:"Invald game event ID"
            })        
        
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}



module.exports = {
    getGameEvents,
    getGameEventById
}