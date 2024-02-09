const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

const userRoute=require("./controllers/userRouter")

app.use(express.json())
app.use(cors())

//connecting to monngodb
mongoose.connect("mongodb+srv://suhaila:suhaila273@cluster0.azy349s.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/register",userRoute)

app.listen(3001,()=>{
    console.log("server running")
})
