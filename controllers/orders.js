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
    try {
        const order = await Order.create(req.body);
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
