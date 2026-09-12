import mongoose from 'mongoose'
import { mongoDbUrl } from './env.config.js'

export const connectDb = async ()=>{
    await mongoose.connect(mongoDbUrl)
    console.log('mongoose connected sucessfully');
}