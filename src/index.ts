import express from "express"
import "express-async-errors"

import dotenv from "dotenv"
import cors from "cors"
import authRouter from "./routers/authRouter.js"


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(authRouter)

const PORT = +process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`)
})
