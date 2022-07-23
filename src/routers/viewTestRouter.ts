import { Router } from "express";
import { viewtestsByDiscipline, viewtestsByTeacher } from "../controllers/viewTestsController.js";

const viewTestRouter = Router()

viewTestRouter.get("/tests/disciplines", viewtestsByDiscipline)
viewTestRouter.get("/tests/teacher", viewtestsByTeacher)

export default viewTestRouter