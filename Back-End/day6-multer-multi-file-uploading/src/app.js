import express from 'express'
import dotenv from 'dotenv'
import fileRouter from './routes/file.route.js'

dotenv.config()

const app = express();

//middelware
app.use(express.json())

//routes
app.use('/file',fileRouter)     //fille route







export default app;