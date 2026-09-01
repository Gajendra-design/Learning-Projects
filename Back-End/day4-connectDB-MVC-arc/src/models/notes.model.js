const mongoose = require('mongoose')

const notesScema = new mongoose.Schema({
    title:{
        type:String,
        requireed:true
    },
    description:{
        type:String,
        requireed:true
    }
})

const notesModel = mongoose.model('notes',notesScema)

module.exports = notesModel