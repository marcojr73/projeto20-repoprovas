import * as repositories from "../repositories/testsRepositories.js"
import {dataTest} from "../repositories/testsRepositories.js"

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

export {
    findCategory,
    findDiscipline,
    findTeacher,
    findTeacherDiscipline,
    insertTest
}