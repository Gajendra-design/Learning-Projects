import express from "express";
import { testController } from "../controllers/auth.controller.js";

export const  authRoute = express.Router();

authRoute.get('/test',testController)