import express from 'express'
import authRoute from './routes/auth.route.js';

const app = express();


//middelwares
app.use(express.json())

//prefix-route auth
app.use('/auth',authRoute)

export default app;