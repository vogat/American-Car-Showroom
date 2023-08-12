import Nav from '../components/Nav';
import Home from '../components/Home';
import Add from '../components/Add';
import Selected from '../components/Selected';
import { Fragment, useState } from 'react';
import axios from 'axios';

function SelectedCar({ handleCreate, cars, handleDelete, handleEdit }) {

    //  const allCars = cars.map(car => {
    //     return (
    //             <Fragment key={car._id}>
    //                 <Cars car={car}/>
    //             </Fragment>
    //     );
    // });

    // const [carDetail, setCarDetail] = useState({});
    // const URL = 'http://localhost:3001'

    // async function getCarDetails(car) {
	// 	try {
	// 		const response = await axios.get(`${URL}/api/cars/${car._id}/`);
			
	// 		setCarDetail(response.data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }
    // console.log(carDetail)
    return ( 
        <div className='SelectedCar'>
			<Nav />
			<Home />
			<Add handleCreate={handleCreate} />
			<Selected cars={cars} handleDelete={handleDelete} handleEdit={handleEdit}/>
            {/* {allCars} */}
		</div>
     );
}

export default SelectedCar;