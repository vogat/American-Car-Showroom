const express = require('express');
const router = express.Router();
const carsRouter = require('./cars');
// const ordersRouter = require('./orders');
// const orderItemsRouter = require('./orderItems');

//			'/api'

router.use('/cars', carsRouter);
// router.use('/orders', ordersRouter);
// router.use('/orderItems', orderItemsRouter);

module.exports = router;
