import { Router } from "express";


const viewTest = Router()



viewTest.get("/tests?groupBy")

viewTest.get("/tests/disciplines")
viewTest.get("/tests/teachers")

export default viewTest