import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'please fill a valid email address'],
        trim:true
    },
    phone:{
        type:String,
        require:[true,'phone numbber is required'],
        match:[/^(\+91[\-\s]?|91[\-\s]?|0)?[6-9]\d{9}$/,'please enter a valid mobile number'],
        trim:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minlength:[8,'password must be atleast of 8 character long'],
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'passeord must be of atleast 8 charter long and should contain atlest one uppercase, one lowercase, one number and one special charter'],
        trim:true
    }
})

export const userModel = mongoose.model('validate-user',userSchema)