const Order = require('../models/order')

module.exports = {
    index,
    show,
    create,
    edit,
    deleteItem,
}

async function index(req, res) {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

async function show(req, res) {
    const id = req.params.orderId;
    try {
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

async function create(req, res) {
    const items = req.body.cartItems;
    const username = req.body.username;
    const isDelivery = req.body.isDelivery;
    const isPaid = false;
    const price = items.reduce(((acc, item) => acc + item.price), 0);

    try {
        const order = await Order.create({username, isDelivery, isPaid, price});
        // use order to set reference for orderItems then create the order items with that reference

        // get orderItems as array, then pus to order.orderItem


        // send back order, which will now have references to the items in it
        // probably need to include the actual orderItems in the response to prevent more api calls
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

async function edit(req, res) {
    const id = req.params.itemId;
    try {
        const order = await Order.findByIdAndUpdate(id, req.body);
        res.status(202).json(order);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

async function deleteItem(req, res) {
    const id = req.params.itemId;
    try {
        const response = await Order.findByIdAndDelete(id);
        res.status(204).json(response);
    } catch (err) {
        res.status(400).json({error: err});
    }
}
