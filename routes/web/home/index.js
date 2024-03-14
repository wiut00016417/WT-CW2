const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/web/home');

router.get('/', controller.index);
router.get('/add', controller.add);
router.get('/update', controller.update);
router.get('/update/:id', controller.update);

module.exports = router;