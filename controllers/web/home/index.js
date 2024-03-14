const recipe_functions = require("../../../services/recipe");

const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    
    add: async (req, res) =>{
        res.render('home/form', {mode: 'Add'});
    },

    update: async (req, res) =>{
        const eventData = await recipe_functions.getId(req.params.id);
        res.render('home/form', { mode: 'Update', eventData: eventData});
    }
};
  
module.exports = home_controller;