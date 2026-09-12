import mongoose from "mongoose";
import { envVariables } from "./config.js";

export const connectDb = async () =>{
   await mongoose.connect(envVariables.mongooseConnectionUrl);
    console.log('db connected sucessfully');
    
}