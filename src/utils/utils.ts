import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

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
    validatetionTokenAndStoreUser
}