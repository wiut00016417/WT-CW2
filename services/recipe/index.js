const fs = require('fs')
const recipes = require(global.db)

const recipe_options = {
    display(){
        return recipes
    },

    getId(id){
        return recipes.find(t => t.id == id)
    },

    add(req, res){
        let new_id = genId()
        const recipe = req.body

        const new_recipe = {
            id: new_id,
            recipe: recipe
        }

        recipes.push(new_recipe)
        write(recipes)
        return new_recipe
    },

    update(id, updateData){
        const recipeId = recipes.findIndex(t => t.id == id)
        if (recipeId === -1){
            return null
        }

        recipes[recipeId].recipe = {...recipes[recipeId].recipe, ...updateData}
        write(recipes)
        return recipes[recipeId]
    },

    delete(id){
        const Id = recipes.findIndex(i => i.id == id)
        recipes.splice(Id, 1)
        write(recipes)
    }
}

let write = async(users) => {
    await fs.writeFileSync(global.db, JSON.stringify(users, null, 4), 'utf8')
}

function genId() {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 3; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
}

module.exports = recipe_options