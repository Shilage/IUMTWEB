const {
    gamesService
} = require("../services")



const getGamesByCompetition= async (req, res, next)=>{
    try{
        const competitionId=req.query.competitionId
        const startDate=req.query.startDate
        const endDate=req.query.endDate
        console.log(startDate, endDate, competitionId)
        if(!competitionId)
            return res.status(400).send({error:"Competition ID missing"})
        else if (competitionId.length<2)
            res.send({
                error:"Invalid competition ID"
            })

        const page= req.query.page
        if(!page)
            return res.status(400).send({error:"Missing page of games"})
        else if (page<0)
            res.send({
                error:"Invalid games page"
            })


        const data= await gamesService.getGamesByCompetition(competitionId, page, startDate, endDate)
        // console.log(data)
        if(data.length===0)
            res.send({data: "Not found"})
        else
        {
            res.send(data);
        }
        next()
    }catch(e){
        console.log(e.message)
        res.status(500) && next(e)
    }
}



const getGames = async (req, res, next) => {

    try {
        const data = await gamesService.getGames();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
const getLastGames = async (req, res, next) => {
    try {
        const data = await gamesService.getLastGames();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getGameById = async (req, res, next) => {

    try {
        const id = req.query.id;
        if (!id)
            return res.status(400).send({ error: 'Game ID is missing' });

        if(id>0)
        {
            const data = await gamesService.getGameById(id);
            res.send(data);
        }else
            res.send({
                error:"Invalid game ID"
            })

        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


const getGameDetails = async (req, res, next)=>{
    try {
        const id = req.query.gameId;
        if (!id)
        {
            return res.status(400).send({ error: 'Game ID is missing' });

        }

        if(id>0)
        {
            const data = await gamesService.getGameDetails(id);
            console.log(data)
            res.send(data);
        }else
            res.send({
                error:"Invalid game ID"
            })

        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}



module.exports = {
    getGames,
    getLastGames,
    getGameById,
    getGamesByCompetition,
    getGameDetails
}