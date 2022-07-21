import client from "../config/dataBase.js"
import {users} from "@prisma/client"

export type userData = Omit<users, "id" | "createdAt">

async function findByEmail(email: string){
    return client.users.findFirst({
        where: { email },
    })
}

function insertNewUser(dataUser: userData){
    return client.users.create({
        data: dataUser
    })
}

export {
    findByEmail,
    insertNewUser,
}