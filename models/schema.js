const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:String,
    email:String,
    password:Number
})
const user=mongoose.model("user",userschema)
module.exports=user;