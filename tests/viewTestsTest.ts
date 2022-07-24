import supertest from "supertest"
import app from "../src/app.js"
import client from "../src/config/dataBase.js"
import dotenv from "dotenv"

import * as factory from "./factories/factory.js"

dotenv.config()


export async function viewTests(){
    console.log("tests running on base" + process.env.DATABASE_URL)

    beforeEach(async ()=> {
        await client.$executeRaw`TRUNCATE TABLE tests`
    })
    
    describe("validation views test", () => {
        it("sucess view tests per disciplipine", async () => {
            const user = factory.createDataUser()
            await supertest(app).post("/sign-up").send(user)
            let response = await supertest(app).post("/sign-in").send(user)
            const token = response.text
            response = await supertest(app).get("/tests/disciplines").auth(token, {type: "bearer"})
            
            expect(response.statusCode).toBe(200)
        })
        
        it("sucess view tests per teacher", async () => {
            const user = factory.createDataUser()
            await supertest(app).post("/sign-up").send(user)
            let response = await supertest(app).post("/sign-in").send(user)
            const token = response.text
            response = await supertest(app).get("/tests/teacher").auth(token, {type: "bearer"})
            
            expect(response.statusCode).toBe(200)
        })
    
    })
    
    afterAll(async () => {
        await client.$executeRaw`TRUNCATE TABLE tests`
        await client.$disconnect();
    });
}
