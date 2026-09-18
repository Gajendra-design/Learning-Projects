import { userModel } from "../model/user.model.js";

export const registerController = async (req,res)=>{
    const {email,phone,password} = req.body;

    if(!email || !phone || !password){
        return res.status(400).json({
            success:false,
            message:"please provide email,phone and password field properly"
        })
    }


    const user = await userModel({
        email,
        phone,
        password
    })

    res.status(201).json({
        success:true,
        message:"usres registerd successfully",
        data:user
    })
}