const express = require('express');
const fileRouter = require('./routes/file.route')

const app = express()

//middelware
app.use('/file',fileRouter)

module.exports = app;