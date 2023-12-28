const {Router}=require("express")
const {Home,signup,login,index,product,gallery,loginn, cookie,cookies}=require("../controllers/user.controller")
const passport=require("passport")
const router=Router()

router.get("/",Home)
router.post("/signup",signup)
router.post("/login",passport.authenticate("local",{successRedirect:"/index",failureRedirect:"/login"}))
router.get('/index',index)
router.get('/product',product)
router.get('/gallery',gallery)
router.get('/login',loginn)
router.get("/cookie",cookie)
router.get("/cookies",cookies)
router.get("/profile",(req,res)=>{
    if(req.user){
        res.send(req.user)
    }
    else{
        res.redirect("/login")
    }
})
router.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("logout")
        }
    })
})

module.exports=router;