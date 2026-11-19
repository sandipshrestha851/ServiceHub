require("dotenv").config();
const express = require("express")
const app = express()
const authRouter = require("./routes/authRoutes")

//middlewares
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

//routes
app.use("/api/auth",authRouter)


const PORT = 8000
app.listen(PORT,(error)=>{
    if(error){
        throw error
    }else{
        console.log(`App is listening on the PORT ${PORT}`)
    }
})