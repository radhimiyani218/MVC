const user = require("../models/schema")

// get
const Home=(req,res)=>{
    res.send("welcome to mvc")
}
// login signup
const signup=async(req,res)=>{
   try{
    let data=await user.findOne({email:req.body.email})
    if(data){
        return res.send("already user exits")
    }
    else{
       let data=await user.create(req.body)
        return res.send(data)
    }
   }
   catch(error){
    return res.send(error.message)
   }
}
const login=async(req,res)=>{
//    try{
//     let data=await user.findOne({email:req.body.email})
//     if(!data){
//         return res.send("usernot found")
//     }
//     if(data.password != req.body.password){
//         return res.send("wrong password")
//     }
//     else
//     {
//         return res.send('loged in')
//     }
//    }catch(error){
//         res.send(error.message)
//     }
    res.send("login")
}
// ejs

const index=(req,res)=>{
    res.render("index")
}
const product=(req,res)=>{
    res.render("product")
}
const gallery=(req,res)=>{
    res.render("gallery")
}
const loginn=(req,res)=>{
    res.render("loginn")
}
// set cookie
const cookie=(req,res)=>{
    res.cookie("name","radhi").send("cookie")
}

// get cookie
const cookies=(req,res)=>{
    console.log(req.cookies);
    res.send("cookies") 
}
module.exports={Home,signup,login,index,product,gallery,loginn,cookie,cookies}