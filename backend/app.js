require("dotenv").config();
const express = require("express")
const app = express()
const authRouter = require("./routes/authRoutes")

//middlewares
app.use(express.urlencoded({ extended: true }));


const PORT = 8000
app.listen(PORT,(error)=>{
    if(error){
        throw error
    }else{
        console.log(`App is listening on the PORT ${PORT}`)
    }
})