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

function createToken(){
    
}

export {
    createDataTest,
    createToken,
    createDataUser
}


