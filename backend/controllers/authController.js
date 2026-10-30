const {body,validationResult,matchedData} = require("express-validator")
const db = require("../db/queries")

exports.signupPost = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        //error display code
    }

    const {name,email,password,confirmPassword} = matchedData(req)
    if(password === confirmPassword){
        try{
            await db.registerUser(name,email,password)
        }catch(error){
            throw error
        }

    }else{
        console.log("password doesnot match")
    }
}