const express=require("express")

const router=express.Router()

const resumeModel=require("../models/resumeModel")

router.post("/addresume",async(req,res)=>{
    let data=req.body
    let resume=new resumeModel(data)
    let result=await resume.save()
    res.json({status:"success"})
})

module.exports=router