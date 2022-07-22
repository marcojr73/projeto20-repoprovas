import client from "../config/dataBase.js";

async function findCategoryByName(name: string){
    return await client.categories.findUnique({
        select: {
            id: true,
        },
        where:{name}
    })
}

export {
    findCategoryByName
}