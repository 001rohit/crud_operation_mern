const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:String
})

let user = mongoose.model('user',userSchema)

module.exports = user