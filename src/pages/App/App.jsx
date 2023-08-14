import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainPage from '../MainPage';
import SelectedCar from '../SelectedCar';

export default function App() {

	const [cars, setCars] = useState([]);

	const URL = 'https://americancarshowroom.onrender.com/';

	async function getCars() {
		try {
			const response = await axios.get(`${URL}/api/cars/`);
			setCars(response.data);
		} catch (err) {
			console.log(err);
		}
	}

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
			console.log(newCars)
			setCars(newCars);
		} catch (err) {
			console.log(err);
		}
	}


	return(
		<main className="App">
			<>
				<Routes>
					<Route path='/' element={<MainPage cars={cars} handleCreate={handleCreate} />} />
					<Route path='/:carId' element={<SelectedCar cars={cars} handleDelete={handleDelete} handleEdit={handleEdit} />} />
				</Routes>
			</>
		</main>
	)
}

