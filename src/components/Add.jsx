import React from "react";
import {useState} from 'react'

function Add({ handleCreate }) {

    const defaultCar = {
        title: '',
        description: '',
        price: 0,
        category: 'Italian',
        img: ''
    }

    const [car, setCar] = useState(defaultCar)

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(car)
        setCar(defaultCar)
    }

    return ( 
        <div className="add-section wrapper">
        <div className="body">
            <div className="add-section-content content">
                <p className="text">Add Car</p>
                <form className="AddCar" onSubmit={handleSubmit}>
                    <ul>
                        <input className="AddInput" type="text" name="make" placeholder="Car Make"  onChange={handleChange} />
                    </ul>
                    <ul>
                        <input className="AddInput" type="text" name="model" placeholder="Car Model"  onChange={handleChange} />
                    </ul>
                    <ul>
                        <input className="AddInput" type="text" name="year" placeholder="Car Year"  onChange={handleChange} />
                    </ul>
                    <ul>
                        <input className="AddInput" type="text" name="img" placeholder="image"  onChange={handleChange} />
                    </ul>
                    <ul>
                        <input className="AddInput" type='submit' />
                    </ul>
                </form>
            </div>
        </div>
    </div>
     );
}

export default Add;