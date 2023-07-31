
const express=require("express")
const { dbConnection } = require("./db.js")
const userRouter = require("./routers/user.js")
const cors=require("cors")
const dotenv=require("dotenv")



 const app= express()
 app.use(cors())
 dotenv.config()


  
 app.use(express.json())
 
 const PORT=process.env.PORT


 dbConnection()
 
app.get("/",(req,res)=>{
     return res.send('server condition  fine')
})

app.use("/api",userRouter)







app.listen(PORT,()=>console.log(`server connected localhost:${PORT}`))

