import { NextFunction, Request, Response } from "express";
import { dataCreatetest } from "../schemas/schemas.js";
import * as utils from "../utils/utils.js"


async function validateDataCreateTest(req: Request, res: Response, next: NextFunction){
    const {name, pdfUrl, category, discipline, teacher}: utils.dataCreate = req.body

    await dataCreatetest.validateAsync({name, pdfUrl, category, discipline, teacher})

    next()

}


export {
    validateDataCreateTest,
}
