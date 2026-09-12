import bcrypt, { hashSync } from "bcryptjs";
import { envVariables } from "../config/config.js";
import { userModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken'

const authRegesterController = async (req,res)=>{

    //first get data from the request
    const {username,email,password} = req.body;
    
    //hash the password
    const hashedPassword = bcrypt.hashSync(password,envVariables.salt)   //keval hash use karoge tho who asyn hota hai and then use await

    // register user in the db async operation hai async lagana na bhule
    const user = await userModel.create({
        username,
        email,
        password:hashedPassword
    })

    //genrate a jwt token with a jwt secrete or a private key
    const accessToken = jwt.sign({username,email},envVariables.jwtSecreate)

    //send the proper response with proper status code
    res.status(201).json({
        sucess:true,
        message:"user created sucessfully",
        user,
        accessToken
    })
}

const authLoginController = async (req,res)=>{
    
    //get data from the request body
    const {email,password} = req.body

    //find if the email of the user is in db
    const isUserExisits = await userModel.findOne({email});   //await lagana na bhule yaar async operation hai

    //if no the response that wrong credentials
    if(!isUserExisits){
        return res.status(404).json({
            sucess:false,
            message:"email id is wrong"
        })
    }

    
    //compare the value of palin text in request of password with the hashed password in the db
    const isPasswordRight = bcrypt.compareSync(password,isUserExisits.password)  //keval compare use karoge tho who asyn hota hai and then use await

    //if no the response that wrong credentials
    if(!isPasswordRight){
        return res.status(401).json({
            sucess:false,
            message:"wrong passwotd you are unauthorised for accessing this account"
        })
    }
    

    //if yes then genrate a jwt toke with the jwt secratee and givinf the id of the user
    const accessToken = jwt.sign({password:isUserExisits._id},envVariables.jwtSecreate);

    //send response with jwt token
    res.status(200).json({
        sucess:true,
        message:"welcome back",
        isUserExisits,
        accessToken
    })
}

export {
    authRegesterController,
    authLoginController
}