const Car = require('../models/car');

module.exports = {
	index,
	show,
	create,
	edit,
	deleteCar,
}

async function index(req, res) {
	try {
		const gallery = await Car.find({});
		res.status(200).json(gallery);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function show(req, res) {
	const id = req.params.carId
	try {
		const gallery = await Car.findById(id);
		res.status(200).json(gallery);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function create(req, res) {
	try {
		const car = await Car.create(req.body);
		res.status(201).json(car)
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function edit(req, res) {
	const id = req.params.carId
	try {
		const gallery = await Car.findByIdAndUpdate(id, req.body);
		res.status(202).json(gallery);
	} catch (err) {
		res.status(400).json({error: err});
	}
}

async function deleteCar(req, res) {
	const id = req.params.carId
	try {
		const response = await Car.findByIdAndDelete(id);
		res.status(204).json(response);
	} catch (err) {
		res.status(400).json({error: err});
	}
}
