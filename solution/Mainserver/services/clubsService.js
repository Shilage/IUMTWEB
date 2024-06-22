// const { db } = require("../db");
const axios = require('axios');
const mongoose  = require('mongoose');
const res = require("express/lib/response");
const drinkSchema= new mongoose.Schema({

    Cocktail:String,
    Glassware:String,
    Method:String,
    Ingredient:String,
    Quantity:String
})

// const drinkModel= mongoose.model("drink", drinkSchema)
const getClubs = async  (req, res)=>{

    const response=await  axios.get('http://localhost:8444/clubs/prova')
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);
    console.log("Dall'altro server è arrivato questo ===>",response.data)
    return({
        data:response.data.data
    })
}

const getClubss = async () => {
    try {
        const response = await axios.get('http://localhost:8444/clubs');

        return response.data; // Return only the data from the response
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};
const getClubsFromCompetition = async (compid) =>{
    try{
        const response = await axios.get('http://localhost:8444/clubsFromCompetition', {params: {compid : compid}});
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.status);
        console.log('Date in Response header:', headerDate);
        console.log("Dall'altro server è arrivato questo ===>",response.data)
        return response.data;
    } catch (error){
        console.error('Error:', error.message);
        throw error;
    }
}

const getClubsByName = async (letter) =>{
    try{
        const response = await axios.get('http://localhost:8444/clubsByName', {params: {letter : letter}});
        return response.data;
    }catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

const getClubById = async (id) => {
    try {
        const response = await axios.get('http://localhost:8444/clubById', {params: {id : id}});
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

module.exports = {
    getClubs, getClubss, getClubsFromCompetition, getClubsByName, getClubById
}