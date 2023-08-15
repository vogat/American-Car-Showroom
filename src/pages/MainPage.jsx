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