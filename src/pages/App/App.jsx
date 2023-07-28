import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NavBar from "../../component/NavBar/NavBar";
import AddItem from '../../component/AddItem/AddItem';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [items, setItems] = useState([])

  async function handleCreate(createdItem) {
    try {
      const response = await axios.post('http://localhost:3001/api/items/', createdItem);
      setItems([...items, response.data]);
   } catch (err) {
      console.log(err);
   }
  }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/admin' element={<AddItem handleCreate={handleCreate} />} />
      </Routes>
    </div>
  );
}

