const exp=require("express")
const app=exp()
const path=require('path')
const userApi=require('./APIS/userApi')
const mclient=require("mongodb").MongoClient

app.use(exp.static(path.join(__dirname,'../build')))

app.use("/user",userApi)


const dburl="mongodb+srv://sandhya:sandhya@cluster0.tychy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mclient.connect(dburl,(err,clientDB)=>{
    if(err){
        console.log("Error in connecting to DB",err)
    }
    else{
        let dbobj=clientDB.db();
        let userCollectionObj=dbobj.collection("usercollection")
        app.set("userCollectionObj",userCollectionObj);
        console.log("DB server started")
    }
})


const PORT=4000
app.listen(PORT,()=>console.log(`web server running on port ${PORT}..`))