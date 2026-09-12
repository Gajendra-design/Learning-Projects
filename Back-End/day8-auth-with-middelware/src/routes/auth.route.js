import express from "express";
import { authLoginController, authRegisterController, deleteAllUsersControllers } from "../controllers/auth.controller.js";

const authRoute = express.Router();

//testing route
authRoute.get('/test',(req,res)=>{
    res.send('sucess')
})

authRoute.post('/register',authRegisterController)
authRoute.post('/login',authLoginController)
authRoute.get('/deleteAllUsers',deleteAllUsersControllers)



export default authRoute