const mongoose=require("mongoose")

const resumeSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users"
        },
        profile:{
            type:String,
            required:true
        },
        education:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        achievments:{
            type:String,
            required:true
        },
        certifications:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("resumes",resumeSchema)