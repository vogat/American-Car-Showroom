import {useLocation} from 'react-router-dom';
// import NavBar from '../../component/NavBar/NavBar';
// import Header from '../../component/Header/Header';
import { useState } from 'react';
import { Link } from "react-router-dom";

// export default function ({handleDeleteOrder}) {

    // return (
    //     <div className='OrderItemPage'>
    //         <NavBar />
    //         <Header />
    //         <div id="orderItemsArea">
    //             <h3 id="customer">Customer: {data.order.username} - ${data.order.price}</h3>
    //             <button className="orderButtons" onClick={() => handleDeleteOrder(data.order)}>Delete</button>
    //             <button className="orderButtons">Pay</button>
    //             <div id="allOrderedItems" onClick={ () => handlePay(data.order) }>{allItems}</div>
    //         </div>
    //    </div>
    // )
// }

function Selected({cars, handleDelete, handleEdit, carDetail, getCarDetails}) {

    const data = useLocation().state.data;
    console.log(data)

    const handleBack = () => {
        data='';
    }

    const [car, setCar] = useState({...data})

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleEdit(car)
    }

    return ( 
        <div className="cars-section wrapper">
                <p className="text">Showroom</p>
                <div id="selection">
                    <h2 id="car-name">{data.year} {data.make} {data.model}</h2>
                    <img id="car-image" src={data.img}/>
                    <Link to='/' onClick={handleBack}>Back</Link>
                    <Link to='/' onClick={() => handleDelete(data)}>Delete</Link>
                    {/* <Link to={`/${data._id}/edit`} state={data}>Edit</Link> */}
                    <details>
                        <summary>Edit</summary>
                            <form className="AddCar" onSubmit={handleSubmit}>
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
                                    <input className="AddInput" type='submit' />
                                </ul>
                         </form>
                    </details>
                    

                </div>
            </div>
     );
}

export default Selected;