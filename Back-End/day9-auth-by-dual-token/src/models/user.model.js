import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        minlength: [3, 'minimum 3 characters are required for a username'],
        maxlength: [50, 'a username cannot be more then 50 characters long'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is reqired'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is reqired'],
    },
    refreshToken:{
        type:String
    }
})

export const userModel = mongoose.model('users',userSchema)