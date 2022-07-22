import { Request, Response } from "express";
import * as utils from "../utils/utils.js"
import * as addServices from "../services/addTestService.js"

async function addTest(req: Request, res: Response){

    const {name, pdfUrl, category, discipline, teacher}: {name: string, pdfUrl: string, discipline: string, category: string, teacher: string} = req.body
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    const userId = await utils.validatetionTokenAndStoreUser(token)
    const categoryId = await addServices.findCategory(category)
    console.log(categoryId)

    res.status(201).send("bala azul")
}

export {
    addTest
}