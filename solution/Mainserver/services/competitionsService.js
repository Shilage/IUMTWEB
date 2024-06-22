const axios = require('axios');

const getCompetitions = async () => {
    try {
        const response = await axios.get('http://localhost:8444/competitions');
        return response.data; // Return only the data from the response
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getSelectedCompetitions = async () => {
    try {
        const response = await axios.get('http://localhost:8444/selectedcompetitions');
        return response.data; // Return only the data from the response
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getCompetitionsByName = async (letter) => {
    try {
        const response = await axios.get('http://localhost:8444/competitionsByName', {params: {letter : letter}});
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getCompetitionById = async (id) => {
    try {
        const response = await axios.get('http://localhost:8444/competitionById', {params: {id : id}});
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};



module.exports = {
    getCompetitions,getSelectedCompetitions, getCompetitionsByName, getCompetitionById
};