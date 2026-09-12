import express from "express"
import { authRoute } from "../routes/auth.route.js";

export const app = express();

//middelwares
app.use(express.json());

//auth routes
app.use('/auth',authRoute)