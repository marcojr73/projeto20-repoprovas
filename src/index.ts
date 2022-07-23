import express from "express"
import "express-async-errors"

import dotenv from "dotenv"
import cors from "cors"
import authRouter from "./routers/authRouter.js"
import errorHandler from "./middlewares/errorHandlerMiddleware.js"
import addTestRouter from "./routers/addTestRouter.js"
import viewTestRouter from "./routers/viewTestRouter.js"


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(authRouter)
app.use(addTestRouter)
app.use(viewTestRouter)
app.use(errorHandler)


const PORT = +process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`)
})
