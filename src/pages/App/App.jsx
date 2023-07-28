import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../../component/NavBar/NavBar";
import AddItem from '../../component/AddItem/AddItem';
import EditItem from '../../component/EditItem/EditItem';
import Item from '../../component/Item/Item';
import ItemIndex from '../../component/ItemIndex/ItemIndex';


import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

export default function App() {
	const [items, setItems] = useState([]);

	async function getItems() {
		try {
			const response = await axios.get('http://localhost:3001/api/items');
			setItems(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleCreate(createdItem) {
		try {
			const response = await axios.post('http://localhost:3001/api/items', createdItem);
			setItems([...items, response.data]);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getItems();
	}, []);
	const allItems = items.map(item => {
		return (
			<Fragment key={item._id}>
				<Item item={item} />
				<hr />
			</Fragment>
		);
	});

	async function handleDelete(deletedItem) {
		try {
			await axios.delete(`http://localhost:3001/api/items/${deletedItem._id}`);
			const notDeletedItems = items.filter(item => item._id !== deletedItem._id)
			setItems(notDeletedItems);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleEdit(editedItem) {
		try {
			await axios.put(`http://localhost:3001/api/items/${editedItem._id}`, editedItem);
			const newItems = items.map(i => {
				return i._id !== editedItem._id ? i : editedItem;
			});
			setItems(newItems);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="App">
			<NavBar />
			<Routes>
				{/* <Route path='/' element={<Menu items={items} />} /> */}
				<Route path='/admin' element={
          <>
            <AddItem handleCreate={handleCreate} />
            <ItemIndex items={items} handleEdit={handleEdit} handleDelete={handleDelete}/>
          </>}>
        </Route>
				{/* <Route path='/admin/add' element={<AddItem handleCreate={handleCreate} />} />
				<Route path='/admin/edit/:itemId' element={<EditItem handleEdit={handleEdit} />} /> */}
			</Routes>
		</div>
	);
}

