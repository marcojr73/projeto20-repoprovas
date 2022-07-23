import { NextFunction, Request, Response } from "express";
import { dataCreatetest } from "../schemas/schemas.js";
import * as utils from "../utils/utils.js"


async function validateDataCreateTest(req: Request, res: Response, next: NextFunction){
    const {name, pdfUrl, category, discipline, teacher}: utils.dataCreate = req.body

    await dataCreatetest.validateAsync({name, pdfUrl, category, discipline, teacher})

    next()

}

function validateCorrectGroupSent(req: Request, res: Response, next: NextFunction){
    
    const groupBy = req.query.groupBy

    if(groupBy !== "disciplines" && groupBy !== "teachers") {
        throw {
            status: 406,
            message: "this group not valid"
        }
    }

    next()
}

export {
    validateDataCreateTest,
    validateCorrectGroupSent
}
