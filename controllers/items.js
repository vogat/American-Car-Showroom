const Item = require('../models/item')

module.exports = {
	index,
	show,
	create,
	edit,
	deleteItem,
}

async function index(req, res) {
	try {
		const menuItems = await Item.find({});
		res.status(200).json(menuItems);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function show(req, res) {
	const id = req.params.itemId
	try {
		const menuItem = await Item.findById(id);
		res.status(200).json(menuItem);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function create(req, res) {
	try {
		const item = await Item.create(req.body);
		res.status(201).json(item)
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function edit(req, res) {
	const id = req.params.itemId
	try {
		const menuItem = await Item.findByIdAndUpdate(id, req.body);
		res.status(202).json(menuItem);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function deleteItem(req, res) {
	const id = req.params.itemId
	try {
		const response = await Item.findByIdAndDelete(id);
		res.status(204).json(response);
	} catch (err) {
		res.status(400).json({error: err});
	}
}
