import express from "express"
import { authRoute } from "../routes/auth.route.js";
import cookieParser from "cookie-parser";

export const app = express();

//middelwares
app.use(express.json());
app.use(cookieParser())

//auth routes
app.use('/api/auth',authRoute)