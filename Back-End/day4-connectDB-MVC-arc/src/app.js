const express = require('express');
const connectDB = require('./config/connectDB');
const notesModel = require('./models/notes.model')

const app = express();

//middelwares
app.use(express.json());   //for reading json text data which is comming through reqest body

//calling connectDB for connecting database in express
connectDB();

app.post('/create',async (req,res)=>{
    const body = req.body;

    const note =  await notesModel.create(body)

    return res.status(201).json({
        message:"note created sucessfully",
        data:note
    })
})


//exporting
module.exports = app;