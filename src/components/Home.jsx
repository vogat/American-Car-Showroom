import React from "react";

function Home() {

    const handleAddCar = () => {
        const element = document.querySelector(".add-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
    const handleShowroom = () => {
        const element = document.querySelector(".cars-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }

    return ( 
        <div className="home-section wrapper">
            <p className="text">Route 66 Auto Gallery</p>
            <span className="description">
                A car showroom where American car owners can share their car with other enthusiasts online.
            </span>
            <div className="links">
                    {/* <button className="button">Add Car</button> */}
                    <div className="button"><a onClick={handleAddCar}>Add Car</a></div>
                    {/* <button className="button">Showroom</button> */}
                    <div className="button"><a onClick={handleShowroom}>Showroom</a></div>
            </div>
        </div>
     );
}

export default Home;