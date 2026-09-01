const express = require('express');
const {createNoteController} = require('../controllers/notes.controller')

const notesRouter = express.Router()

notesRouter.post('/create',createNoteController)


module.exports = notesRouter