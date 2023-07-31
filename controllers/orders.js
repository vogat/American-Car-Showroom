const Order = require('../models/order');
const OrderItem = require('../models/orderItem');

module.exports = {
    index,
    show,
    create,
    edit,
    deleteItem,
}

async function index(req, res) {
    try {
        const orders = await Order.find({}).populate('orderItem');
        res.status(200).json(orders);
    } catch (err) {
        res.status(400).json({error: err});
    }
}

async function show(req, res) {
    const id = req.params.orderId;
    try {
        const order = await Order.findById(id).populate('orderItem');
        const orderItems = await OrderItem.find({order: order._id})

        const data = {
            order,
            orderItems,
        }
        res.status(200).json(data);
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
        const orderItems = [];
        for (const item of items) {
            const completedOrderItem = await OrderItem.create({
                title: item.title,
                price:item.price,
                img: item.img,
                order:order._id
            });
            orderItems.push(completedOrderItem);
        }

        const data = {
            order,
            orderItems,
        }

        res.status(201).json(data);
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
