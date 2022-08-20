import React,{ useState } from 'react';

// stylesheet
import './Progress.scss';

function Progress() {
    // The state is create din numberic datatype
    const[ slide, setSlide ] = useState(1);

    const prevSlide = () => {
        // The condition will set the state in decreasing order on each click event
        setSlide( slide <= 1 ? 5 : slide - 1 )
    }

    const nextSlide = () => {
        // The condition will set the state in increasing order on each click event
        setSlide( slide === 5 ? 1 : slide + 1 )
    }

  return (
    <div className='progress_container'>
        {/* prev and next arrow button */}
        <div className='prev' onClick={prevSlide}></div>
        <div className='next' onClick={nextSlide}></div>
        {/* Based on the state, the classname will change */}
        <div className={ slide === 1 ? 'active-slide' : 'not-active-slide'}>
            <p>1</p>
        </div>
        <div className={ slide === 2 ? 'active-slide' : 'not-active-slide'}>
            <p>2</p>
        </div>
        <div className={ slide === 3 ? 'active-slide' : 'not-active-slide'}>
            <p>3</p>
        </div>
        <div className={ slide === 4 ? 'active-slide' : 'not-active-slide'}>
            <p>4</p>
        </div>
        <div className={ slide === 5 ? 'active-slide' : 'not-active-slide'}>
            <p>5</p>
        </div>
        <div className='indicator'>
            {/* The progress bar width changes based on the state */}
            <div style={ slide === 1 ? { width:'20%' } : slide === 2 ? { width: '40%' } : slide === 3 ? { width: '60%' } : slide === 4 ? { width: '80%' } : slide === 5 ? { width: '100%' } : { width:'20%' } }></div>
        </div>
    </div>
  )
}

export default Progress