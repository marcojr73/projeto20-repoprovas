import * as repositories from "../repositories/testsRepositories.js"

async function getAllTestsOfDiscipline(){
    return await repositories.getAllTestsOfDiscipline()
}

async function getAllTestsOfTeacher(){
    return await repositories.getAllTestsOfTeacher()
}

export {
    getAllTestsOfDiscipline,
    getAllTestsOfTeacher
}