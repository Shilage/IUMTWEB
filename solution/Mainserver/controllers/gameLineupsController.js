const {
    gameLineupsService
} = require("../services")



const getGameLineups = async (req, res, next) => {

    try {
        const data = await gameLineupsService.getGameLineups();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


const getGameLineupById = async (req, res, next) => {
    try {
        const id = req.query.id;
        if (!id) 
            return res.status(400).send({ error: 'Game lineup ID is missing' });

        if(id.length===32)
        {            
            const data = await gameLineupsService.getGameLineupById(id);
            res.send(data);
        }else 
            res.send({
                error:"Invald game linup ID"
            })        
        
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}



module.exports = {
    getGameLineups,
    getGameLineupById
}