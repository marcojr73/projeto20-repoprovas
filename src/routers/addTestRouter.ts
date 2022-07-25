import { Router } from "express";
import { validateDataCreateTest } from "../middlewares/testsMiddlewawre.js";
import { addTest } from "../controllers/addTestController.js";
import multer from "multer";
import multerConfig from "../config/multerConfig.js";

const addTestRouter = Router()

addTestRouter.post("/tests/create", multer(multerConfig).single('file'), validateDataCreateTest, addTest)

export default addTestRouter