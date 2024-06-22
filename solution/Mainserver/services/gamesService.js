const axios = require('axios');




const getGames = async  ()=>{
    try {
        const response= await axios.post('http://localhost:1338/games/getGames')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }


}

const getLastGames = async  ()=>{
    try {
        const response= await axios.post('http://localhost:1338/games/getLastGames')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

const getGameById = async  (id)=>{
    try {
        const response=await  axios.post('http://localhost:1338/games/getGameById',{id: id})
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

const getGamesByCompetition = async  (id, page, startDate, endDate)=>{
    try {
        // console.log(startDate, endDate)
        const response=await  axios.post('http://localhost:1338/games/getGamesByCompetition',{competitionId: id, page: page, startDate:startDate, endDate:endDate})
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}




const getGameDetails = async  (id)=>{
    try {
        const response=await  axios.post('http://localhost:1338/games/getGameDetails',{gameId: id})
        console.log(response)
        return({
            data:response.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}


module.exports = {
    getGames,
    getLastGames,
    getGameById,
    getGamesByCompetition,
    getGameDetails
};