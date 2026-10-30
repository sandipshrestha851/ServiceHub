const {Router} = require("express")
const authRouter = Router()
const authController = require("../controllers/authController")

authRouter.post("/signup",authController.signupPost)

module.exports = authoRouter;