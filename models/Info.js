const mongoose = require('mongoose')
const Schema =mongoose.Schema
const InfoSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    adhaar:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("info",InfoSchema)