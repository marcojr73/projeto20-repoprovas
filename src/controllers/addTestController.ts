import { Request, Response } from "express";
import * as utils from "../utils/utils.js"
import * as addServices from "../services/addTestService.js"

async function addTest(req: Request, res: Response){

    const {name, pdfUrl, category, discipline, teacher}: utils.dataCreate = req.body
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    await utils.validatetionTokenAndStoreUser(token)

    const categoryId = await addServices.findCategory(category)
    const disciplineId = await addServices.findDiscipline(discipline)
    const teacherId = await addServices.findTeacher(teacher)
    const teacherDisciplineId = await addServices.findTeacherDiscipline(teacherId, disciplineId)
    await addServices.validateTestNotExist({name, pdfUrl, categoryId, teacherDisciplineId})
    await addServices.insertTest({name, pdfUrl, categoryId, teacherDisciplineId})

    res.status(201).send("Test register sucessfull")
}

export {
    addTest
}