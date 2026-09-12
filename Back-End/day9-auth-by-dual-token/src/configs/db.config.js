import mongoose from "mongoose";
import { config } from "./env.config.js";

export const connectDb = async ()=>{
     await mongoose.connect(config.mongooseUrl)
    console.log("mongo db connected sucessfully");
}