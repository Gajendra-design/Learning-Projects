import express from "express";
import { refreshController, registerController, testController, userVerifyController } from "../controllers/auth.controller.js";

export const  authRoute = express.Router();

authRoute.get('/test',testController)

authRoute.post('/register',registerController)

authRoute.post('/refresh',refreshController)

authRoute.get('/me',userVerifyController)