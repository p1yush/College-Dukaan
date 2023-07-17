import mongoose from "mongoose";
import userModel from "./userModel";

const userDetailsSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        refs : userModel
    },
    college :{
        type : String ,
        required : true
    } ,
    phone_number : {
        type : Number , 
        required : true
    } ,
    enrollment_number : {
        type : Number
    }

} , {timestamps:true})

export default userDetailsModel =  mongoose.Model('userDetails' , userDetailsSchema)