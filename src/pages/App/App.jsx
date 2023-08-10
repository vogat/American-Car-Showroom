import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import Add from '../../components/Add';
import Cars from '../../components/Cars';
import Home from '../../components/Home';

export default function App() {

	const [cars, setCars] = useState([]);
	// const [orders, setOrders] = useState([]);

	// const [user, setUser] = useState(null);


	const URL = 'http://localhost:3001';
	// const URL = 'https://themeltingpot-07h3.onrender.com'

	async function getCars() {
		try {
			const response = await axios.get(`${URL}/api/cars/`);
			setCars(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	// async function getOrders() {
	// 	try {
	// 		const response = await axios.get(`${URL}/api/orders/`);
	// 		setOrders(response.data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	async function handleCreate(createdCar) {
		try {
			const response = await axios.post(`${URL}/api/cars/`, createdCar);
			setCars([...cars, response.data]);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getCars();
		// getOrders();
	}, []);

	async function handleDelete(deletedCar) {
		try {
			await axios.delete(`${URL}/api/cars/${deletedCar._id}/`);
			const notDeletedCars = cars.filter(car => car._id !== deletedCar._id);
			setCars(notDeletedCars);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleEdit(editedCar) {
		try {
			await axios.put(`${URL}/api/cars/${editedCar._id}/`, editedCar);
			const newCars = cars.map(i => {
				return i._id !== editedCar._id ? i : editedCar;
			});
			setCars(newCars);
		} catch (err) {
			console.log(err);
		}
	}

	// function handleAddToCart(addedCar) {
	// 	setCart([...cart, addedItem]);
	// }

	// function handleRemoveFromCart(deletedItem) {
	// 	const idx = cart.findIndex((cartItem) => cartItem === deletedItem);
	// 	const updatedItems = [...cart]
	// 	updatedItems.splice(idx, 1);
	// 	setCart(updatedItems);
	// }

	// async function handleCreateOrder(cart) {
	// 	const data = {
	// 		cartItems: cart,
	// 		username: user,
	// 		isDelivery: false,
	// 	}
	// 	try {
	// 		const response = await axios.post(`${URL}/api/orders/`, data);
	// 		const newOrder = response.data.order;
	// 		setOrders([...orders, newOrder]);
	// 		setCart(defaultCart);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	// async function handleDeleteOrder(order) {
	// 	const id = order._id
	// 	try {
	// 		await axios.delete(`${URL}/api/orders/${id}`);
	// 		const NotDeletedOrders = orders.filter(o => o._id != id);
	// 		setOrders(NotDeletedOrders);
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }

	return(
		<div className='App'>
			<Nav />
			<Home />
			<Add handleCreate={handleCreate} />
			<Cars cars={cars}/>
		</div>
	)
}

