const user = require('../models/schema');

const localstrategy=require('passport-local').Strategy

const localAuth=(passport)=>{
    passport.use(new localstrategy(async(username, password,done)=>{
        // console.log(username,password);
        let User =await user.findOne({username:username})
        if(!User){
            return done(null,false)
        }
        if(User.password != password){
            return done(null,false)
        }
        console.log("User",User);
        return done(null,User)
    }));
    passport.serializeUser((user,done)=>{
        return done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
        const User=await user.findById(id)
        return done(null,User)
    })
}
module.exports=localAuth