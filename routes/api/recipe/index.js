const express = require('express')
const {validationResult} = require('express-validator')
const{addValidate, updateValidate, deleteValidate} = require('../../../validators/recipe')

const router = express.Router()
const recipe_controller = require('../../../controllers/api/recipe')

router.get('/', (req, res)=>{
    recipe_controller.display(req, res);
});

router.post('/', addValidate(), (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    recipe_controller.add(req, res)
})

router.put('/:id', updateValidate(), (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    recipe_controller.update(req, res)
})

router.delete('/:id', deleteValidate(), (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    recipe_controller.delete(req, res)
  })

  module.exports = router;