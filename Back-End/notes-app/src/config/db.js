const mongoose = require('mongoose');
const dns = require('dns');

//dns is not resolving because of srv in the uri string so iam forcing google dns directly here
dns.setServers(['8.8.8.8','8.8.4.4'])

const dbConnection = async ()=>{
    try {
    const connection = await mongoose.connect('mongodb+srv://sharmagajendra167_db_user:cohert1234@notes.wgv1tio.mongodb.net/')
    console.log('sucessfully connected to the mongo DB');
    
    } catch (error) {
        console.log('error in connecting db',error);
        
    }
}

module.exports = dbConnection