import { Request, Response } from "express";
import * as authService from "../services/authService.js"

async function signUp(req: Request, res: Response){

    let {email, password}: {email: string, password: string} = req.body

    await authService.validateIfEmailIsInUse(email)
    password = authService.encryptedPassword(password)
    authService.registerUser({email, password})

    res.status(201).send("User register sucessfull")
}

async function signIn(req: Request, res: Response){
    
    const {email, password}: {email: string, password: string} = req.body

    const user = await authService.verifyAndGetIfUserExists(email)
    authService.verifyPasswordIsCorrect(password, user.password)
    const token = authService.generateToken(user.id)

    res.status(200).send(token)
}

export {
    signUp,
    signIn
}