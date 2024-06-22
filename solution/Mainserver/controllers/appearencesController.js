const {
    appearencesService
} = require("../services")



const getAppearences = async (req, res, next) => {

    try {
        const data = await appearencesService.getAppearences();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


const getAppearenceById = async (req, res, next) => {
    try {
        const id = req.query.id;
        if (!id)
            return res.status(400).send({ error: 'Appearence ID is missing' });

        if((id.split('_')).length==2)
        {
            const data = await appearencesService.getAppearenceById(id);
            res.send(data);
        }else
            res.send({
                error:"Invald appearence ID"
            })

        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
const getMainAppearences = async (req, res, next) => {
    try {
        const data = await appearencesService.getMainAppearences();
        res.send(data);
        next();
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


module.exports = {
    getAppearences,
    getAppearenceById,
    getMainAppearences
}