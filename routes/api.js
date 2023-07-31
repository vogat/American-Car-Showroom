const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');
const ordersRouter = require('./orders');
const orderItemsRouter = require('./orderItems');

//			'/api'

router.use('/items', itemsRouter);
router.use('/orders', ordersRouter);
router.use('/orderItems', orderItemsRouter);

module.exports = router;
