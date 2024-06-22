const axios = require('axios');


const getGameLineups = async  ()=>{
    try {
        const response=await  axios.post('http://localhost:1338/gameLineups/getGameLineups')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }

}

const getGameLineupById = async  (id)=>{
    try {
        const response=await  axios.post('http://localhost:1338/gameLineups/getGameLineupById')
        return({
            data:response.data.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}


module.exports = {
    getGameLineups, 
    getGameLineupById
};