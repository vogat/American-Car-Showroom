import Nav from '../components/Nav';
import Home from '../components/Home';
import Add from '../components/Add';
import Cars from '../components/Cars';
import DisplaySection from '../components/Display';
import WebgiViewer from '../components/WebgiViewer';
// import Loader from './components/Loader'
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

function MainPage({ handleCreate, cars }) {
    const webgiViewerRef = useRef();
    const contentRef = useRef();

    const handlePreview = () => {
        webgiViewerRef.current.triggerPreview();
    }

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

    return ( 
        <div className='MainPage'>
            <div ref={contentRef} id='content'>
                <Home />
                <Add handleCreate={handleCreate} />
                <Cars cars={cars}  />
                <DisplaySection triggerPreview={handlePreview} />
            </div>
            <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
		</div>
     );
}

export default MainPage;