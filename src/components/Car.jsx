import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

function Car({ car, cars, getCarDetails, carDetail }) {

    useEffect(() => {
		getCarDetails(car);
	}, []);

    const data = car

    return ( 
        <Fragment key={car._id}>
            <Link to={`/${car._id}`}  state={{data}} >
                <div id="cars">
                        <h2 id="car-name">{car.year} {car.make} {car.model}</h2>
                        <img id="car-image" src={car.img}/>
                </div>
            </Link>
        </Fragment>
     );
}

export default Car;