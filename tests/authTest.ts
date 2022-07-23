import supertest from "supertest"
import app from "../src/app.js"
import client from "../src/config/dataBase.js"
import dotenv from "dotenv"

import * as factory from "./factories/factory.js"

dotenv.config()


export async function authTest(){
    console.log("tests running on base" + process.env.DATABASE_URL)

    beforeEach(async ()=> {
        await client.$executeRaw`TRUNCATE TABLE users`
    })
    
    describe("validation signup", () => {
        it("get registration in the application", async () => {
            const user = factory.createDataUser()
            const response = await supertest(app).post("/sign-up").send(user)
            expect(response.statusCode).toBe(201)
        })
    
        it("receive a token when logging in", async () => {
            const user = factory.createDataUser()
            await supertest(app).post("/sign-up").send(user)
            const response = await supertest(app).post("/sign-in").send(user)
            const token = response.text
            expect(token).not.toBeUndefined()
        })
        
        it("given email and password already in use fail sign up", async () => {
            const user = factory.createDataUser()
            await supertest(app).post("/sign-up").send(user)
            const response = await supertest(app).post("/sign-up").send(user)
            expect(response.statusCode).toBe(422)
        })

        it("given email and password incorrect fail sign in", async () => {
            const user = factory.createDataUser()
            const response = await supertest(app).post("/sign-in").send(user)
            const {token} = response.body
            expect(token).toBeUndefined()
        })
    
    })
    
    afterAll(async () => {
        await client.$executeRaw`TRUNCATE TABLE users`
        await client.$disconnect();
    });
}
