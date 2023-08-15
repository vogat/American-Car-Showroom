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

    return ( 
        <div className='MainPage'>
            <div ref={contentRef} id='content'>
                <Selected cars={cars} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </div>
		</div>
     );
}

export default SelectedCar;