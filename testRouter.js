
import express from "express";
// import { getAllCountries } from "./data.js";
// import { addCountry }  from  "./data.js";
import { User } from "./mongoose.js";

export const testRouter = express.Router();


testRouter.get('/', async(request,response)=>{  
    
    response.send(await User.find()); 
})


testRouter.post('/', async (request,response)=>{
    const newCountry  =request.body;
    // addCountry(newCountry)
    // console.log(getAllCountries())
    const addCountry = new User({
        name: newCountry.name,
        capital: newCountry.capital,

    });

    addCountry.save();
    response.send(' This country is added to the list') 
})

// Receiving the response "This country is added to the list"
// the list of country will be updated