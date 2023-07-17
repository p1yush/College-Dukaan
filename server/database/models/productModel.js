import mongoose from "mongoose";
import userModel from "./userModel";

const productSchema = new mongoose.Schema({
    productName : {
        type : String ,
        required : true
    } ,
    ProductDescription : {
        type : String
    } ,
    productPrice : {
        type : Number ,
        required : true
    } , 
    seller : {
        type : mongoose.Types.ObjectId,
        refs : userModel
    }
    // productImages : [{

    // }]

} , {timestamps:true})

export default productModel = mongoose.Model('product' , productSchema)