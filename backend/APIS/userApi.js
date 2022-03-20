const exp=require("express")
const userApp =exp.Router()

const bcryptjs=require("bcryptjs")

userApp.use(exp.json())


{/* user*/}
let userCollectionObj;
const getUserCollectionObj =(req,res,next)=>{
    userCollectionObj=req.app.get("userCollectionObj")
    next()
}
userApp.use(getUserCollectionObj)

userApp.post("/createuser",(req,res) =>{

    let userObj=req.body
    bcryptjs.hash(userObj.password,5,(err,hashedpassword)=>{
        if(err){
            console.log("err in hashing password")
        }
        else{
            userObj.password=hashedpassword;

            userCollectionObj.insertOne(userObj,(err,success)=>{
                if (err){
                    console.log("err in creating user",user);
                    res.send({message:"error ",payload:err.message})
                }
                else{
                    res.send({message:"success",payload:success})
                }
            })
        }
    })
})


module.exports=userApp