const express = require('express')
const dbConnection = require('./config/db');
const notesRouter = require('./routers/notes.router')

const app = express();

//middelwares
app.use(express.json()) //for handeling the json data comming in request body
app.use('/notes',notesRouter) //for handeling routes for specificaly for notes(now we will handel routes releted to notes in seprate file)

//connecting mongo DB
dbConnection()

module.exports = app