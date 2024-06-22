const axios = require('axios');

const getPlayers = async () => {
    try {
        const response = await axios.get('http://localhost:8444/players');
        return response.data; // Return only the data from the response
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};
const getPlayerById = async (id) => {
    try {
        const response=await  axios.get('http://localhost:8444/playerid', {params: {playerId : id}})
        if (response.data === null)
            return -1
        return({
            data:response.data
        })
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

const getPlayersByClubId = async (clubid) => {
    try {
        console.log(clubid)
        const response=await  axios.get('http://localhost:8444/playersByClubId', {params: {clubid : clubid}})
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

const getPlayersByName = async (letter) => {
    try {
        const response = await axios.get('http://localhost:8444/playersByName', {params: {letter : letter}});
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

module.exports = {
    getPlayers,
    getPlayerById,
    getPlayersByClubId,
    getPlayersByName
};