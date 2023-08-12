import React from 'react';

function DisplaySection({ triggerPreview }) {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <div className='display-section wrapper'>
            <h2 className='title'>New</h2>
            <p className='text'>3D model!</p>
            <span className='description'>
                Be able to navigate around the 1970s corvette stingray in a 3D environment!
            </span>
            <button className='button' onClick={triggerPreview}>Try me!</button>
            <button className='back-button' onClick={handleScrollToTop}>TOP</button>
        </div>
    );
}

export default DisplaySection;