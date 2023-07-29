const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/items');


router.get('/', menuItemController.index);
router.get('/:itemId', menuItemController.show);

router.delete('/:itemId', menuItemController.deleteItem);

router.put('/:itemId', menuItemController.edit);

router.post('/', menuItemController.create);

module.exports = router;