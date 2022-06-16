const validator = require("validator");
const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please Enter Your Name'],
        trime : true,
        maxlength : [50, 'User name can not exceed 50 characters.']
    },
    description : {
        type : String,
        trim : true,
        maxlength : [100, 'Description can not exceed 100 characters.']
    },
    price : {   
        type : Number,
        required : [true, 'Please enter product price'],
        maxLength : [7, "Product length cannot exceed 100 Numbers"],
        default : 0.0
       },
    quantity : {
        type : Number,
        required : [true, "Pleaese enter product quantity"],
        maxLength : [5, "Product sock can not be more than 99999"],
        default : 0
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Product", Product);