import { Request, Response } from "express";
import * as utils from "../utils/utils.js"
import * as servicesTest from "../services/viewTestsServices.js"

async function viewtestsByDiscipline(req: Request, res: Response){
    
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    await utils.validatetionTokenAndStoreUser(token)

    const groupTest = await servicesTest.getAllTestsOfDiscipline() 

    res.status(200).send(groupTest)
}

async function viewtestsByTeacher(req: Request, res: Response){
    
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    await utils.validatetionTokenAndStoreUser(token)

    const groupTest = await servicesTest.getAllTestsOfTeacher() 

    res.status(200).send("teacher")
}

export {
    viewtestsByDiscipline,
    viewtestsByTeacher
}