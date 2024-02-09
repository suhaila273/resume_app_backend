const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        username:String,
        password:String,
        dob:String,
        email:String,
        phone:String
    }
)

module.exports=mongoose.model("users",userSchema)