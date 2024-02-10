const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

const userRoute=require("./controllers/userRouter")
const resumeRoute=require("./controllers/resumeRouter")

app.use(express.json())
app.use(cors())

//connecting to monngodb
mongoose.connect("mongodb+srv://suhaila:suhaila273@cluster0.azy349s.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/register",userRoute)
app.use("/api/resume",resumeRoute)

app.listen(3001,()=>{
    console.log("server running")
})
