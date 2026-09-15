import { jwtSecreate } from "../configs/env.config.js"
import { userModel } from "../models/user.model.js"
import jwt from 'jsonwebtoken'


export const authentication = async (req,res,next)=>{
    //first take access token from the headers in the request
    const accessToken = req.headers.authorization.split(' ')[1]

    //then decode it through verify in jwt so we can decode it as well as we know who the access token is created by our secrete key 

    try {
        //if it is genrated by our server then decode the token first and find the id in the payload
        const verify = jwt.verify(accessToken,jwtSecreate)

        //then find the user in db by that id
        const user = await userModel.findOne({_id:verify.id})

        //if user not found then respose with 404 not found
        if(!user){
            return res.status(404).json({
                message:"user not found in our db"
            })
        }
        
        //if user found then response with 200 status
        req.user = user;
    } catch (error) {
        //if it is not genrated by our server then respose with 401 un authorised,invalid access token
        return res.status(401).json({
            message:"unauthorized, invalid access token"
        })   
    }

    next()
}