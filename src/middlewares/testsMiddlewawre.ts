import { NextFunction, Request, Response } from "express";
import { dataCreatetest } from "../schemas/schemas.js";

async function validateDataCreateTest(req: Request, res: Response, next: NextFunction){
    const {name, pdfUrl, category, discipline, teacher}: {name: string, pdfUrl: string, discipline: string, category: string, teacher: string} = req.body

    await dataCreatetest.validateAsync({name, pdfUrl, category, discipline, teacher})

    next()

}

export {
    validateDataCreateTest
}
