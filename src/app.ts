import express from "express"
import "express-async-errors"

import cors from "cors"
import authRouter from "./routers/authRouter.js"
import errorHandler from "./middlewares/errorHandlerMiddleware.js"
import addTestRouter from "./routers/addTestRouter.js"
import viewTestRouter from "./routers/viewTestRouter.js"


const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)
app.use(addTestRouter)
app.use(viewTestRouter)
app.use(errorHandler)

export default app
