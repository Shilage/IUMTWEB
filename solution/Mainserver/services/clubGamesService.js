const axios = require('axios');
const res = require("express/lib/response");

const getClubGames = async  ()=>{
    try {
            const response=await  axios.post('http://localhost:1338/clubGames/getClubGames')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
    
    
}

const getClubGameById = async  (id)=>{
    try {
        const response=await  axios.post('http://localhost:1338/clubGames/getClubGameById',{id: id})

        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }

    
}


module.exports = {
    getClubGames, 
    getClubGameById
};