const express=require("express")

const router=express.Router()

const resumeModel=require("../models/resumeModel")

router.post("/addresume",async(req,res)=>{
    let data=req.body
    let resume=new resumeModel(data)
    let result=await resume.save()
    res.json({status:"success"})
})

router.get("/viewresume",async(req,res)=>{
    let result=await resumeModel.find()
    .populate("userId","username dob email phone -_id")
    .exec() 
    res.json(result)
})

module.exports=router