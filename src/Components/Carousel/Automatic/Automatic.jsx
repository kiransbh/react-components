import React,{ useState, useEffect } from 'react';

// stylesheet
import './Automatic.scss';

function Automatic() {
    // The state is create din numberic datatype
    const[ slide, setSlide ] = useState(1);

    const nextSlide = () => {
        // The condition will set the state in increasing order on each click event
        setSlide( slide === 5 ? 1 : slide + 1 )
    }

    useEffect(() => {
        // The timer is used to call the state at 5s interval
        const timer = setInterval(( nextSlide ), 5000);

        // After each time when the timer is called, the set timer is cleared.
        return () => clearInterval(timer);
    },[slide]);

  return (
    <div className='automatic_container'>
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
            {/* The indicator set the state based on the state change happens */}
            <div className={ slide === 1 ? 'active-indicator' : 'not-active-indicator' }></div>
            <div className={ slide === 2 ? 'active-indicator' : 'not-active-indicator' }></div>
            <div className={ slide === 3 ? 'active-indicator' : 'not-active-indicator' }></div>
            <div className={ slide === 4 ? 'active-indicator' : 'not-active-indicator' }></div>
            <div className={ slide === 5 ? 'active-indicator' : 'not-active-indicator' }></div>
        </div>
    </div>
  )
}

export default Automatic