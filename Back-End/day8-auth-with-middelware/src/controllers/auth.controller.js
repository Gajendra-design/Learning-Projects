import {userModel} from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import {salt,jwtSecreate} from '../configs/env.config.js'

export const authRegisterController = async (req,res)=>{

    // destrucring the data from the rr=eq body
    const {username,email,password} = req.body;

    //hsing the password in the syncrounous method if we use simple hash method then it is a async method
    const hashPassword = bcrypt.hashSync(password,salt)
    
    //now saving the credentials in the databse using model which we created for our  user
    const userDoc = await userModel.create({username,email,password:hashPassword})

    //i am converting the retuning userDoc from the user model to an object and removing the password properpty and then sending that object to the response
    const user = userDoc.toObject();
    delete user.password;

    //genrating a access token for the user to send it for the user/client
    const accessToken = jwt.sign({id:user._id},jwtSecreate)

    //sending a proper response for the user
    res.status(201).json({
        sucess:true,
        message:"user created sucessfully",
        user,
        accessToken
    })
} 

export const authLoginController = async (req,res)=>{
    res.send('login')
}

export const deleteAllUsersControllers = async (req,res)=>{

    try {
      await userModel.deleteMany({});
      res.status(200).json({
        sucess:true,
        message:"all users from the databse deleted-sucessfully"
      })  
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"there is some error in this prcess plwase try again"
        })
        console.log(error);
    }

}