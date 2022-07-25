import * as repositories from "../repositories/testsRepositories.js"

async function getAllTestsOfDiscipline(){
    const ans = await repositories.getAllTestsOfDiscipline() as any

    ans.forEach(i=>{
        i.disciplines.forEach(j=>{
            j.teachersDisciplines.forEach(k=>{
                const teacher = k.teacher.name
                delete k.teacher
                k.tests.forEach(l=>{
                    l.teacher = teacher
                })
            })
        })
    })

    return ans
}

async function getAllTestsOfTeacher(){
    const ans = await repositories.getAllTestsOfTeacher() as any

    ans.forEach(i=>{
        i.teachersDisciplines.forEach(j=>{
            j.tests.forEach(k=>{
                const discipline = k.teacherDisciplines.disciplines.name
                k.category = k.categories.name
                k.discipline = discipline
                delete k.teacherDisciplines
                delete k.categories
            })
        })
    })

    return ans
}

export {
    getAllTestsOfDiscipline,
    getAllTestsOfTeacher
}