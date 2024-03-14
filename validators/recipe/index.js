const { body, param } = require('express-validator')
const recipe_service = require('../../services/recipe')

const addValidate = () => {
    return [
        body('Name').notEmpty().withMessage('Recipe name should not be empty')
        .isLength({min: 3, max: 20}).withMessage('Insert recipe name with 3 to 20 characters'),
        body('Steps').notEmpty().withMessage('Steps should not be empty'),
        body('Ingredients').notEmpty().withMessage('Ingredients should not be empty')
    ]
}

const deleteValidate = () => {
    return [
        param('id').custom(async(id)=>{
            const exists = await recipe_service.getId(id);

            if (!exists){
                throw new Error('Recipe not found')
            }
        })
    ]
}

const updateValidate = () => {
    return [
        param('id').custom(async(id)=>{
            const exists = await recipe_service.getId(id);

            if (!exists){
                throw new Error('Recipe not found')
            }
        }),

        body('Name').notEmpty().withMessage('Recipe name should not be empty')
        .isLength({min: 3, max: 50}).withMessage('Insert recipe name with 3 to 50 characters'),
        body('Steps').notEmpty().withMessage('Steps should not be empty'),
        body('Ingredients').notEmpty().withMessage('Ingredients should not be empty')

    ]
}

module.exports = {
    addValidate,
    deleteValidate,
    updateValidate
}