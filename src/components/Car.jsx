function Car({ car }) {
    return ( 
        <div id="cars">
            <h2 id="car-name">{car.year} {car.make} {car.model}</h2>
            <img id="car-image" src={car.img}/>
        </div>
     );
}

export default Car;