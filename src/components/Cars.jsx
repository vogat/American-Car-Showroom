import React from "react";
import axios from 'axios';
import { Fragment, useState } from 'react';
import Car from './Car';


function Cars({ cars }) {
    const [carDetail, setCarDetail] = useState({});
    const URL = 'https://americancarshowroom.onrender.com'

    async function getCarDetails(car) {
		try {
			const response = await axios.get(`${URL}/api/cars/${car._id}/`);
			
			setCarDetail(response.data);
		} catch (err) {
			console.log(err);
		}
	}

    const [selection, setSelection] = useState(false);

    console.log(carDetail)

    const allCars = cars.map(car => {
        return (
                <Fragment key={car._id}>
                    <Car car={car} cars={cars} carDetail={carDetail} getCarDetails={getCarDetails} />
                </Fragment>
        );
    });

    if (selection == false) {
        return ( 
            <div className="cars-section wrapper">
                <p className="text">Showroom</p>
                <div id="list">
                    {allCars}
                </div>
            </div>
        );
    } else {
        return ( 
            <div className="cars-section wrapper">
                <p className="text">Showroom</p>
                <div id="select">
                    {/* {selectedCar} */}
                </div>
            </div>
        );
    }
}

export default Cars;