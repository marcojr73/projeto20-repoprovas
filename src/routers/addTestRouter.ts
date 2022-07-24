import { Router } from "express";
import { validateDataCreateTest } from "../middlewares/testsMiddlewawre.js";
import { addTest } from "../controllers/addTestController.js";

const addTestRouter = Router()

addTestRouter.post("/tests/create", validateDataCreateTest, addTest)

export default addTestRouter