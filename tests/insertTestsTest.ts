import supertest from "supertest"
import app from "../src/app.js"
import client from "../src/config/dataBase.js"
import dotenv from "dotenv"

import * as factory from "../tests/factories/factory.js"

dotenv.config()


export async function insertTest(){
    console.log("tests running on base" + process.env.DATABASE_URL)
    
    beforeEach(async ()=> {
        await client.$executeRaw`TRUNCATE TABLE tests`
    })
    
    describe("validations on create an test", () => {
        it("success creating a test", async () => {
            const user = factory.createDataUser()
            await supertest(app).post("/sign-up").send(user)
            let response = await supertest(app).post("/sign-in").send(user)
            const token = response.text
            const dataTest = await factory.createDataTest()
            response = await supertest(app).post("/tests/create").auth(token, {type: "bearer"}).send(dataTest)

            expect(response.statusCode).toBe(201)
        })
    
    })
    
    afterAll(async () => {
        await client.$executeRaw`TRUNCATE TABLE tests`
        await client.$disconnect();
    });
}
