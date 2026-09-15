import {userModel} from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import {salt,jwtSecreate} from '../configs/env.config.js'

export const authRegisterController = async (req,res)=>{

    // destrucring the data from the rr=eq body
    const {username,email,password} = req.body;

    //if we don't have either one of the input response with 400 bad request
    if(!username || !email || !password){
        return res.status(400).json({
            message:"missing required json inputs"
        })
    }

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
   return res.status(201).json({
        sucess:true,
        message:"user created sucessfully",
        user,
        accessToken
    })
} 

export const authLoginController = async (req,res)=>{
    //get the data from req.body as email and password
    const {email,password} = req.body

    //if you did not get proper json data then response with 400 bad request
    if(!email || !password){
        return res.status(400).json({
            mesasge:"missign required json inputs"
        })
    }

    //if you recived proper input the first find the user in db
    try {
        //very very importaant isme humne achema ko defind karthe hue password me selet ko false kiya hai so genrally ye fir jab hum user ko find karege db me useme passeord nahi aayega so for that we have to use .select('+password)
        const user = await userModel.findOne({email:email}).select('+password')  

        //if user not found then response with 404 not found
    if(!user){
        return res.status(404).json({
            message:"user not found in the data-base"
        })
    }

    //if everthing is alright till now then 

    //verify the password
    const verifyPassword = bcrypt.compare(password,user.password)

    //if the password is wron then respose with the 400 invalid email or password(don't tell exactly what is wrong or security will be compromised)
    if(!verifyPassword){
        return res.status(400).json({
            mesasge:"invalid email or password"
        })
    }

    //if everything is allright then genrate jwt access token
    const accessToken = jwt.sign({id:user._id},jwtSecreate)

    //respose with the 200 with user info
    return res.status(200).json({
        data:{
            email:user.email
        },
        accessToken
    })
    } catch (error) {
        console.log('error in finding user in the db');
        

        return res.status(500).json({
            message:"something went wrong, please try again"
        })
    }

}

export const verifyController = (req,res)=>{

    const user = req.user

  return  res.status(200).json({
        message:'sucess',
        data:{
            user:{
                username:user.username,
                email:user.email
            }
        }
    })
    
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