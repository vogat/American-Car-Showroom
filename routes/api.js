const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItems')

//			'/api'

router.get('/', menuItemController.index);


module.exports = router;