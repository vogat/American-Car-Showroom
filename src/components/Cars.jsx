import React from "react";
import axios from 'axios';
import { Fragment, useState } from 'react';
import Car from './Car';


function Cars({ cars }) {
    const [carDetail, setCarDetail] = useState({});
    const URL = 'http://localhost:3001'

    async function getCarDetails(car) {
		try {
			const response = await axios.get(`${URL}/api/cars/${car._id}/`);
			
			setCarDetail(response.data);
		} catch (err) {
			console.log(err);
		}
	}

    const allCars = cars.map(car => {
        return (
                <Fragment key={car._id}>
                    <Car car={car} cars={cars} carDetail={carDetail} getCarDetails={getCarDetails} />
                </Fragment>
        );
    });

    return ( 
        <div className="cars-section wrapper">
            <p className="text">Showroom</p>
            <div id="list">
                {allCars}
            </div>
        </div>
    );
}

export default Cars;