import * as repositories from "../repositories/testsRepositories.js"

async function findCategory(category: string){
    category = category[0].toUpperCase() + category.substring(1)
    const ans = await repositories.findCategoryByName(category)
    if(!ans) throw {
        status: 404,
        message: "category not found"
    }
    return ans.id
}

export {
    findCategory
}