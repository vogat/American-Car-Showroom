import React from "react";

function Home() {
    return ( 
        <div className="home-section wrapper">
            <p className="text">Route 66 Auto Gallery</p>
            <span className="description">
                A car showroom where American car owners can share their car with other enthusiasts online.
            </span>
            <ul className="links">
                <li>
                    <button className="button">Add Car</button>
                    {/* <button className="button" onClick={handleAddCar}>Add Car</button> */}
                </li>
                <li>
                    <button className="button">Showroom</button>
                    {/* <a className="button" onClick={handleShowroom}>Showroom</a> */}
                </li>
            </ul>
        </div>
     );
}

export default Home;