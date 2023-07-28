const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/items');
const orderController = require('../controllers/orders');

//			'/api'

router.get('/items/', menuItemController.index);
router.get('/items/:itemId', menuItemController.show);

router.delete('/items/:itemId', menuItemController.deleteItem);

router.put('/items/:itemId', menuItemController.edit);

router.post('/items/', menuItemController.create);



router.get('/orders/', orderController.index);
router.get('/orders/:orderId', orderController.show);

router.delete('/orders/:orderId', orderController.deleteItem);

router.put('/orders/:orderId', orderController.edit);

router.post('/orders/', orderController.create);



module.exports = router;