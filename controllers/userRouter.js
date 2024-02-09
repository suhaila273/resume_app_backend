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

module.exports=router