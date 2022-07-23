import { Request, Response } from "express";

async function viewtests(req: Request, res: Response){
    
    const groupBy = req.query.groupBy

    res.status(200).send("ozzy")
}

export {
    viewtests
}