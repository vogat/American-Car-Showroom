const express = require('express');
const router = express.Router();



const orderItemController = require("../controllers/orderItems");
router.get('/', orderItemController.index);
router.get('/:orderItemId', orderItemController.show);

router.delete('/:orderItemId', orderItemController.deleteItem);

router.put('/:orderItemId', orderItemController.edit);

router.post('/', orderItemController.create);

module.exports = router;
