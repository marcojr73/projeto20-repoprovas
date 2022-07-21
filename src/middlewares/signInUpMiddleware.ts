import { NextFunction, Request, Response } from "express";
import { dataSignInUp } from "../schemas/schemas.js"

async function validateDataSignInUp(req: Request, res: Response, next: NextFunction){
    const {email, password}: {email: string, password: string} = req.body

    await dataSignInUp.validateAsync({email, password})

    next()
}

export default validateDataSignInUp