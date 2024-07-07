import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    titleL:{type:String, 
        required:true},

    price:{
        type:Number,
        required:true
    },
   
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true});

const book = mongoose.model('Book',bookSchema);

export default book