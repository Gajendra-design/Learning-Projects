import bcrypt from "bcryptjs";
import { config } from "../configs/env.config.js";
import jwt from 'jsonwebtoken';

export const hashPassword = (password)=>{
    const passwordHash = bcrypt.hashSync(password,config.salt)
    return passwordHash
}

export const tokenGenrater = (userId)=>{

const accessToken = jwt.sign({id:userId},config.acessSecreate,{expiresIn:'15min'})
const refreshToken = jwt.sign({id:userId},config.refreshSecreate,{expiresIn:'7d'})

return {
    accessToken,
    refreshToken
}
}

export const verifyAccessToken = (accessToken)=>{
    const decode = jwt.verify(accessToken,config.acessSecreate);
    return decode;
}

export const verifyRefreshToken = (refreshToken)=>{
    const decode = jwt.verify(refreshToken,config.refreshSecreate);
    return decode;
}