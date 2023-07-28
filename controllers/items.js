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
		console.log(err);
	}
}

async function show(req, res) {
	const id = req.params.itemId
	try {
		const menuItem = await Item.findById(id);
		res.status(200).json(menuItem);
	} catch (err) {
		console.log(err);
	}
}

async function create(req, res) {
	try {
		const item = await Item.create(req.body);
		res.status(201).json(item)
	} catch (err) {
		console.log(err);
	}
}

async function edit(req, res) {
	const id = req.params.itemId
	try {
		const menuItem = await Item.findByIdAndUpdate(id, req.body);
		res.status(202).json(menuItem);
	} catch (err) {
		console.log(err);
	}
}

async function deleteItem(req, res) {
	const id = req.params.itemId
	try {
		await Item.findOneAndDelete(id);
		res.status(204);
	} catch (err) {
		console.log(err);
	}
}
