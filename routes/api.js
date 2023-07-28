const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/items');
const orderController = require('../controllers/orders');
const orderItemController = require('../controllers/orderItems');

//			'/api'

router.get('/items/', menuItemController.index);
router.get('/items/:itemId', menuItemController.show);

router.delete('/items/:itemId', menuItemController.deleteItem);

router.put('/items/:itemId', menuItemController.edit);

router.post('/items/', menuItemController.create);



router.get('/orderItems/', orderItemController.index);
router.get('/orderItems/:orderItemId', orderItemController.show);

router.delete('/orderItems/:orderItemId', orderItemController.deleteItem);

router.put('/orderItems/:orderItemId', orderItemController.edit);

router.post('/orderItems/', orderItemController.create);



router.get('/orders/', orderController.index);
router.get('/orders/:orderId', orderController.show);

router.delete('/orders/:orderId', orderController.deleteItem);

router.put('/orders/:orderId', orderController.edit);

router.post('/orders/', orderController.create);


module.exports = router;