import express from 'express'
import authRouter from './routes/auth.route.js'


const app = express();

//middelwares
app.use(express.json())

//auth route
app.use('/auth',authRouter)

export default app;
