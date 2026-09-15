import express from "express";
import { authLoginController, authRegisterController, deleteAllUsersControllers, verifyController } from "../controllers/auth.controller.js";
import { authentication } from "../middlewares/auth.middelware.js";

const authRoute = express.Router();

//testing route
authRoute.get('/test',(req,res)=>{
    res.send('sucess')
})

authRoute.post('/register',authRegisterController)
authRoute.post('/login',authLoginController)
authRoute.get('/me',authentication,verifyController)
authRoute.get('/deleteAllUsers',deleteAllUsersControllers)



export default authRoute