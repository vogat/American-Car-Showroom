import React from "react";
import { Fragment } from 'react';
import Car from './Car';

function Cars({ cars }) {

    const allCars = cars.map(car => {
        return (
                <Fragment key={car._id}>
                    <Car car={car} />
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