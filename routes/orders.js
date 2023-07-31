const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orders');


router.get('/', orderController.index);
router.get('/:orderId', orderController.show);

router.delete('/:orderId', orderController.deleteItem);

router.put('/:orderId', orderController.edit);

router.post('/', orderController.create);

module.exports = router;