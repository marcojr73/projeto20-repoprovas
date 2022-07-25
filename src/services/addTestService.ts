import * as repositories from "../repositories/testsRepositories.js"
import {dataTest} from "../repositories/testsRepositories.js"
import sgMail from "@sendgrid/mail"
import dotenv from "dotenv"
import { selectListEmails } from "../repositories/userRepositories.js"

async function findCategory(category: string){
    category = category[0].toUpperCase() + category.substring(1)
    const ans = await repositories.findCategoryByName(category)
    if(!ans) throw {
        status: 404,
        message: "category not found"
    }
    return ans.id
}

async function findDiscipline(discipline: string){
    discipline = discipline[0].toUpperCase() + discipline.substring(1)
    const ans = await repositories.findDisciplineByName(discipline)
    if(!ans) throw {
        status: 404,
        message: "discipline not found"
    }
    return ans.id
}

async function findTeacher(teacher: string){
    teacher = teacher[0].toUpperCase() + teacher.substring(1)
    const ans = await repositories.findteacherByName(teacher)
    if(!ans) throw {
        status: 404,
        message: "teacher not found"
    }
    return ans.id
}

async function findTeacherDiscipline(teacherId: number, disciplineId: number) {
    const ans = await repositories.findTeacherDisciplineByIds(teacherId, disciplineId)
    if(!ans) throw {
        status: 404,
        message: "this is not the teacher of this discipline"
    }
    return ans.id
}

async function insertTest(datatest: dataTest){
    await repositories.insertTestOnTable(datatest)
}

async function validateTestNotExist(dataTest: dataTest){
    const ans = await repositories.findTestsByData(dataTest)
    if(ans) throw {
        status: 422,
        message: "this test already register"
    }
}

async function buildEmail(teacher, category, name, discipline){
    dotenv.config()
    const {SGKEY} = process.env
    sgMail.setApiKey(SGKEY)
    
    try {
        const emails = await selectListEmails()
        for(const email of emails){
            const body = {
                to: email,
                from: "marcojuniorengineer@gmail.com",
                subject: "Estudante, uma nova prova foi adicionada!",
                text: `A seguinte prova foi adicionadas: ${teacher} ${category} 2022 - ${name} ${discipline}`
            }
            await sgMail.send(body)
        }    
    } catch (error) {
        throw {
            status: 201,
            message: "Test create on dataBase, but fail to send email"
        }
    }
}

export {
    findCategory,
    findDiscipline,
    findTeacher,
    findTeacherDiscipline,
    validateTestNotExist,
    insertTest,
    buildEmail
}