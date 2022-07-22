import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

type dataCreate = {
    name: string, 
    pdfUrl: string, 
    discipline: string, 
    category: string, 
    teacher: string
}

async function validatetionTokenAndStoreUser(token: string){
    if (!token) throw {
        status: 401,
        message: "Token not sent"
    }

    const {KEYJWT} = process.env
    const {userId} = jwt.verify(token, KEYJWT, function(err, decoded){
        if(err) throw {
            status: 401,
            message: "Token expired or invalid"
        } 
        return decoded
    }) as any
    return userId
}

export {
    dataCreate,
    validatetionTokenAndStoreUser
}