const service = require('../../../services/recipe')

const recipe_functions = {
    display(req, res){
        res.json(service.display())
    },

    add(req, res){
        res.status(201).json(
            service.add(req, res)
        )
    },
    
    update(req, res){
        const recipe = service.update(req.params.id, req.body)

        if(recipe){
            res.json(recipe)
        } 
        else {
            res.status(404).send('Recipe not found')
        }
    },

    delete(req, res){
        const recipe = service.getId(req.params.id)

        if (recipe){
            service.delete(req.params.id)
            res.status(204).send('Recipe has been deleted')
        }
        else{
            res.status(404).send('Recipe not found')
        }

    }
};

module.exports = recipe_functions;