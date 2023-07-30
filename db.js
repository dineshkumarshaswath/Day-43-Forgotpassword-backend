
const mongoose =require("mongoose")



 exports.dbConnection=()=>{
    
    try {
        const params={
            useNewUrlParser:true,
            UseUnifiedTopology:true,
        }
        const mongodburl="mongodb+srv://dineshbhai:dinesh18@studentmentor.eebdrjb.mongodb.net/passwordstask"
        mongoose.connect(mongodburl,params)
        console.log('db connected successfully')
        
    } catch (error) {
        console.log("server side error",error)
        
    }
}
