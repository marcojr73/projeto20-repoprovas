import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateDataSignInUp from "../middlewares/signInUpMiddleware.js";

const authRouter = Router()

authRouter.post("/sign-up", validateDataSignInUp, signUp)
authRouter.post("/sign-in", validateDataSignInUp, signIn)

export default authRouter