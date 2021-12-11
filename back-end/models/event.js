const validator = require("validator");
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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
    location : {
        type : String,
        trim : true,
        maxlength : [200, 'Location can not exceed 200 characters.']
    },
    uid : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
    }
})

module.exports = mongoose.model("Event", eventSchema);