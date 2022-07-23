import { faker } from '@faker-js/faker';
import client from '../../src/config/dataBase.js';

function createDataUser(){
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

async function createDataTest(){
    const ans = await client.teachersDisciplines.findFirst({
        select:{
            teacher:{
                select:{name: true}
            },
            disciplines:{
                select:{name: true}
            }
        } 
    })
    
    const category = await client.categories.findFirst({
        select:{name: true}
    })

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: category.name,
        discipline: ans.disciplines.name,
        teacher: ans.teacher.name
    }
}

async function createFakeCategory(){
    const ans = await client.teachersDisciplines.findFirst({
        select:{
            teacher:{
                select:{name: true}
            },
            disciplines:{
                select:{name: true}
            }
        } 
    })

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: faker.name.findName(),
        discipline: ans.disciplines.name,
        teacher: ans.teacher.name
    }
}

async function createFakeDiscipline(){
    const ans = await client.teachersDisciplines.findFirst({
        select:{
            teacher:{
                select:{name: true}
            }
        } 
    })

    const category = await client.categories.findFirst({
        select:{name: true}
    })

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: category.name,
        discipline: faker.name.findName(),
        teacher: ans.teacher.name
    }
}

async function createFakeTeacher(){
    const ans = await client.teachersDisciplines.findFirst({
        select:{
            disciplines:{
                select:{name: true}
            }
        } 
    })
    
    const category = await client.categories.findFirst({
        select:{name: true}
    })

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: category.name,
        discipline: ans.disciplines.name,
        teacher: faker.name.findName()
    }
}

function findDiff(arr){
    let teacher = null
    let discipline = null
    for (let i = 0; i < arr.length; i++) {
        for(let j = 1; j<arr.length; j++){
            console.log(arr[i], arr[j])
            if(arr[i].teacher !== arr[j].teacher){
                teacher = arr[i].teacher
                discipline = arr[j].discipline
            }
        }
        
    }
    return {
        teacher,
        discipline
    }
}

async function createFakeTeacherDiscipline(){
    const ans = await client.teachersDisciplines.findMany({
        select:{
            teacher:{
                select:{name: true}
            },
            disciplines:{
                select:{name: true}
            }
        } 
    })

    const diff = findDiff(ans)
    
    const category = await client.categories.findFirst({
        select:{name: true}
    })

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: category.name,
        discipline: diff.discipline,
        teacher: diff.teacher
    }
}

export {
    createDataTest,
    createDataUser,
    createFakeCategory,
    createFakeDiscipline,
    createFakeTeacher,
    createFakeTeacherDiscipline
}


