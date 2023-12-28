const mongoose=require('mongoose')
require('dotenv').config()
// console.log("ENV",process.env.DB_URL);
const connection=async()=>{
    // const url = process.env.DB_URL
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("db connected");
}
module.exports = {connection};