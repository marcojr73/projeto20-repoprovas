import { Router } from "express";
import { viewtests } from "../controllers/viewTestsController.js";
import { validateCorrectGroupSent } from "../middlewares/testsMiddlewawre.js";

const viewTestRouter = Router()

viewTestRouter.get("/tests", validateCorrectGroupSent, viewtests)

export default viewTestRouter