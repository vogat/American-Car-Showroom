import Nav from '../components/Nav';
import Home from '../components/Home';
import Add from '../components/Add';
import Selected from '../components/Selected';
import { Fragment, useState } from 'react';
import axios from 'axios';
import DisplaySection from '../components/Display';
import WebgiViewer from '../components/WebgiViewer';
import { useRef } from 'react';

function SelectedCar({ handleCreate, cars, handleDelete, handleEdit }) {
    const webgiViewerRef = useRef();
    const contentRef = useRef();

    const handlePreview = () => {
        webgiViewerRef.current.triggerPreview();
    }

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
        <div className='MainPage'>
            <div ref={contentRef} id='content'>
                <Selected cars={cars} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </div>
            <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
		</div>
     );
}

export default SelectedCar;