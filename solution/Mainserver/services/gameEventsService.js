const axios = require('axios');

const getGameEvents = async  ()=>{
    try {
        const response=await  axios.post('http://localhost:1338/gameEvents/getGameEvents')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }

    
}

const getGameEventById = async  (id)=>{
    try {
        const response=await  axios.post('http://localhost:1338/gameEvents/getGameEventById',{id: id})
    
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
    
}

module.exports = {
    getGameEvents, 
    getGameEventById
};