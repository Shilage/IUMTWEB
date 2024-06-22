const axios = require('axios');

const getPlayers_Evaluations = async () => {
    try {
        const response = await axios.get('http://localhost:8444/player_valuations');
        return response.data; // Return only the data from the response
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

module.exports = {
    getPlayers_Evaluations
};