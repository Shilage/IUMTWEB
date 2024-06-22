const axios = require('axios');

const getAppearences = async  ()=>{
    try {
        const response=await  axios.post('http://localhost:1338/appearences/getAppearences')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }

}

const getAppearenceById = async  (id)=>{
    try {
        const response=await  axios.post('http://localhost:1338/appearences/getAppearenceById',{id: id})

        return({
            data:response.data.data
        })
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }

}

const getMainAppearences = async  ()=>{
    try {
        const response=await  axios.get('http://localhost:1338/appearences/getMainAppearences')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

module.exports = {
    getAppearences,
    getAppearenceById,
    getMainAppearences
};