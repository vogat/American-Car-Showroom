const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/cars');


router.get('/', galleryController.index);
router.get('/:carId', galleryController.show);

router.delete('/:carId', galleryController.deleteCar);

router.put('/:carId', galleryController.edit);

router.post('/', galleryController.create);

module.exports = router;