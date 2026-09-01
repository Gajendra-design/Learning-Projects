//model file ka puspose hai ki hum apna schema matlab hamara object ki shakl kesi hogi ye manage kar sake
const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3
    },
    description:{
        type:String,
        required:true,
        minlength:10
    }
})

const notesModel = mongoose.model('notes',notesSchema)   //yaha pe 2 arguments aaayege one hamare model(collection) ka name kya hoga and and usmejo data aayega uski dhal kesi hogi and iski ko hum export bhi karthe hai

module.exports = notesModel;