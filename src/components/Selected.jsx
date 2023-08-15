import {useLocation} from 'react-router-dom';
import React, { useState, useLayoutEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


function Selected({cars, handleDelete, handleEdit, carDetail, getCarDetails}) {
    const navigate = useNavigate();

    const data = useLocation().state.data;
    console.log(data)

    const handleBack = () => {
        setCar({...data}); // Reset car state

        navigate(`/`);
    }

    const [car, setCar] = useState({...data})

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const instantShowroom = () => {
        const element = document.querySelector(".cars-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'auto'
        })
        console.log('working')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(car)
        handleEdit(car)
        navigate(`/`)
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            instantShowroom();
        }, 1000);    
    }, []);
    
    return ( 
        <div className="cars-section wrapper">
                <p className="text">Showroom</p>
                <div id="selection">
                    <h2 id="show-name">{data.year} {data.make} {data.model}</h2>
                    <img id="show-image" src={data.img}/>
                    <details>
                        <summary>Edit</summary>
                            <form className="EditCar" onSubmit={handleSubmit}>
                                <ul>
                                    <input className="AddInput" type="text" name="make" placeholder="Car Make" onChange={handleChange} />
                                </ul>
                                <ul>
                                    <input className="AddInput" type="text" name="model" placeholder="Car Model" onChange={handleChange} />
                                </ul>
                                <ul>
                                    <input className="AddInput" type="text" name="year" placeholder="Car Year" onChange={handleChange} />
                                </ul>
                                <ul>
                                    <input className="AddInput" type="text" name="img" placeholder="image" onChange={handleChange} />
                                </ul>
                                <ul>
                                    <input id="SubmitBtn" type='submit' />
                                </ul>
                         </form>
                    </details>
                    <br />
                    <Link to='/' onClick={handleBack} className='ShowButton'>Back</Link>
                    <Link to='/' onClick={() => handleDelete(data)} className='ShowButton'>Delete</Link>
                    {/* <Link to={`/${data._id}/edit`} state={data}>Edit</Link> */}
                    

                </div>
            </div>
     );
}

export default Selected;