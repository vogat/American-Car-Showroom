const express = require('express');
const router = express.Router();
const carsRouter = require('./cars');

router.use('/cars', carsRouter);

module.exports = router;
