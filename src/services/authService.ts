import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

import { userData } from "../repositories/userRepositories.js"

import * as userRepositories from "../repositories/userRepositories.js"

async function validateIfEmailIsInUse(email: string){
    const ans = await userRepositories.findByEmail(email)
    if(ans) throw {
        status: 422,
        message: "this email is already registered"
    }
}

function encryptedPassword(password: string){
    return bcrypt.hashSync(password, 10)
}

async function registerUser(dataUser: userData){
    await userRepositories.insertNewUser(dataUser)
}

async function verifyAndGetIfUserExists(email: string){
    const user = await userRepositories.findByEmail(email)
    if(!user) throw {
        status: 404,
        message: "does not exist account register for this email"
    }
    return user
}

function verifyPasswordIsCorrect(password: string, passCrypt: string){
    const ans = bcrypt.compareSync(password, passCrypt)
    if(!ans) throw {
        status: 422,
        message: "this password is incorrect"
    }
}

function generateToken(userId: number){
    dotenv.config()

    const {KEYJWT} = process.env
    return jwt.sign({ userId }, KEYJWT, { expiresIn: '7d'})
}

export {
    validateIfEmailIsInUse  ,
    encryptedPassword,
    registerUser,
    verifyAndGetIfUserExists,
    verifyPasswordIsCorrect,
    generateToken
    
}