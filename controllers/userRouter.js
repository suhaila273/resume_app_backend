const express =require("express")

const router=express.Router()

const bcrypt=require("bcryptjs")
const userModel = require("../models/userModel")

hashPasswordGenerator=async(pass)=>{
 const salt=await bcrypt.genSalt(10)
 return bcrypt.hash(pass,salt)
}

router.post("/adduser",async(req,res)=>{
    let {data}={"data":req.body}
    let password=req.body.password

    const hashedPaassword=await hashPasswordGenerator(password)
    data.password=hashedPaassword
    let users=new userModel(data)
    let result=await users.save()
    res.json(
        {status:"success"}
    )

})

router.post("/login",async(req,res)=>{
    let input=req.body
    let username=req.body.username
    let data=await userModel.findOne({"username":username})
    if(!data)
    {
        return res.json({status:"invalid username"})
    }
    console.log(data)
    let dbPaassword=data.password
    let inputPassword=req.body.password
    const match=await bcrypt.compare(inputPassword,dbPaassword)
    if(!match)
    {
        return res.json({status:"invalid password"})
    }
    res.json({status:"success"})

})

module.exports=router