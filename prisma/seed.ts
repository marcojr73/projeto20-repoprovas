import client from "../src/config/dataBase.js";
import { categories, disciplines, teachers, teachersDisciplines, terms, users } from "./data.js";
import dotenv from "dotenv"

dotenv.config()

console.log("seed running on base" + process.env.DATABASE_URL)

async function seed(){
    await client.users.createMany({
        data: users
    })
    await client.terms.createMany({
        data: terms
    })
    await client.categories.createMany({
        data: categories
    })
    await client.teachers.createMany({
        data: teachers
    })
    await client.disciplines.createMany({
        data: disciplines
    })
    await client.teachersDisciplines.createMany({
        data: teachersDisciplines
    })
}seed().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await client.$disconnect()
})