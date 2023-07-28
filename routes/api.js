const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/items')

//			'/api'

router.get('/items/', menuItemController.index);
router.get('/items/:itemId', menuItemController.show);

router.delete('/items/:itemId', menuItemController.deleteItem);

router.put('/items/:itemId', menuItemController.edit);

router.post('/items/', menuItemController.create);


module.exports = router;