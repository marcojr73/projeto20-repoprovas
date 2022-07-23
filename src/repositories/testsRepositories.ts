import client from "../config/dataBase.js";

import {tests} from "@prisma/client"

export type dataTest = Omit<tests, "id" | "createdAt">

async function findCategoryByName(name: string){
    return await client.categories.findUnique({
        select: {
            id: true,
        },
        where:{name}
    })
}

async function findDisciplineByName(name: string){
    return await client.disciplines.findUnique({
        select: {
            id: true
        },
        where: {name}
    })
}

async function findteacherByName(name: string){
    return await client.teachers.findUnique({
        select: {
            id: true
        },
        where: {name}
    })
}

async function findTeacherDisciplineByIds(teacherId: number, disciplineId: number){
    return await client.teachersDisciplines.findFirst({
        select:{
            id: true
        },
        where:{teacherId, disciplineId}
    })
}

async function findTestsByData(dataTest: dataTest){
    return await client.tests.findFirst({
        where:dataTest
    })
}

async function insertTestOnTable(datatest: dataTest){
    await client.tests.create({
        data: datatest
    })
}

async function getAllTestsOfDiscipline(){
    return await client.terms.findMany({
        select:{
            number: true,
            disciplines: {
                select:{
                    name: true,
                    teachersDisciplines:{
                        select:{
                            teacher:{
                                select:{
                                    name: true
                                }
                            },
                            tests:{
                                select:{
                                    name: true,
                                    pdfUrl: true,
                                    categories:{
                                        select:{
                                            name: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }                
            }

        }
    })
}

async function getAllTestsOfTeacher(){

}

export {
    findCategoryByName,
    findDisciplineByName,
    findteacherByName,
    findTeacherDisciplineByIds,
    findTestsByData,
    insertTestOnTable,
    getAllTestsOfDiscipline,
    getAllTestsOfTeacher
}