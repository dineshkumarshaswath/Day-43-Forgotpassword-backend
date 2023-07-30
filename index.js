
const express=require("express")
const { dbConnection } = require("./db.js")
const userRouter = require("./routers/user.js")

const cors=require("cors")


 const app= express()
 app.use(cors())

 
  
 app.use(express.json())
 

 dbConnection()
 
app.get("/",(req,res)=>{
     return res.send('server condition  fine')
})

app.use("/api",userRouter)







app.listen(7700,()=>console.log(`server connected localhost:7700`))

