import React from 'react';

// stylesheet
import './Backdrop.scss';

function Backdrop() {
  return (
    <div className='backdrop_load_container'>
        <div className='loader'>
            <svg className='circular' viewBox='25 25 50 50'>
                <circle className='path' cx='50' cy='50' r='20' fill='none' strokeWidth='2' strokeMiterLimit='10' ></circle>
            </svg>
        </div>
    </div>
  )
}

export default Backdrop