let {playersService , clubsService} = require("../services")

const getPlayers = async(req, res, next) => {
    try {
        const players = await playersService.getPlayers(req, res);
        res.send(players);
        next();
    } catch (e){
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getPlayerById = async (req,res,next) => {
    try {
        const id = req.query.id;
        if (!id)
            return res.status(400).send({ error: 'Player ID is missing' });
        if(id>0) {
            const data = await playersService.getPlayerById(id);
            res.send(data);
        }else
            res.send({
                error:"Invalid player ID"
            })
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }

}


const getPlayersByClubId = async (req,res,next) => {
    try {
        const clubid = req.query.clubid;
        if (!clubid)
            return res.status(400).send({error: 'Players club ID is missing'});
        if (clubid > 0) {
            const data = await playersService.getPlayersByClubId(clubid);
            res.send(data);
        } else
            res.send({
                error: "Invalid players club ID"
            })
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

    const getPlayersByName = async(req,res,next) =>{
        try{
            const letter = req.query.letter;
            if (!letter)
                return res.status(400).send({ error: 'Parameter is missing' });
            const players = await playersService.getPlayersByName(letter);
            res.send(players);
            next();
        }catch (e){
            console.log(e.message)
            res.sendStatus(500) && next(e)
        }
    }


module.exports = {getPlayers, getPlayerById, getPlayersByClubId, getPlayersByName}