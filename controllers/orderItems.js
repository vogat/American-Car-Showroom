const OrderItem = require('../models/orderItem')

module.exports = {
	index,
	show,
	create,
	edit,
	deleteItem,
}

async function index(req, res) {
	try {
		const orderItems = await OrderItem.find({});
		res.status(200).json(orderItems);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function show(req, res) {
	const id = req.params.orderItemId
	try {
		const orderItem = await OrderItem.findById(id);
		res.status(200).json(orderItem);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function create(req, res) {
	try {
		const orderItem = await OrderItem.create(req.body);
		res.status(201).json(orderItem);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function edit(req, res) {
	const id = req.params.orderItemId
	try {
		const orderItem = await OrderItem.findByIdAndUpdate(id, req.body);
		res.status(202).json(orderItem);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function deleteItem(req, res) {
	const id = req.params.orderItemId
	try {
		const response = await OrderItem.findByIdAndDelete(id);
		res.status(204).json(response);
	} catch (err) {
		res.status(400).json({error: err});
	}
}
