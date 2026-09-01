//now MVC me config folder src me hi hoga and isme sare configuration relted files aayegi 
//  iss file me keval wo logic aayega jisse hamara database connect ho raha hai hamare express se

//firest require mongoose
const mongoose = require('mongoose')
const dns = require('dns');

// Force Node.js to resolve via Google Public DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);


//now yaad rakna mongoose se releted jitne bhi operations hote hai wo promise return karthe hai so for that we have to make our dunction async-awai
const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://sharmagajendra167_db_user:cohert12345@learning-expreriment.rbo2mzh.mongodb.net/')
        console.log('connection to db is sucessful');
    } catch (error) {
        console.log('error in connectiing db',error);
        
    }
}

//export the connection function now
module.exports = connectDB;