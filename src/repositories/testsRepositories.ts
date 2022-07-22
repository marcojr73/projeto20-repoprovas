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

async function insertTestOnTable(datatest: dataTest){
    await client.tests.create({
        data: datatest
    })
}

export {
    findCategoryByName,
    findDisciplineByName,
    findteacherByName,
    findTeacherDisciplineByIds,
    insertTestOnTable
}