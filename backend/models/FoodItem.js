const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cooktime:{
        type:Number
    },
    tag:{
        type:String
    }
})

module.exports = mongoose.model('food',foodSchema)