import React,{ useState } from 'react'

// stylesheet
import './Pagination.scss';

function Pagination() {
    // The state is create din numberic datatype
    const[ slide, setSlide ] = useState(1);

    // The state will change based on the index value
    const switchSlide = (index) => {
        setSlide(index);
    }

  return (
    <div className='pagination_container'>
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
            {/* The indicator set the state based on the click event */}
            <div className={ slide === 1 ? 'active-indicator' : 'not-active-indicator' }
            onClick={() => switchSlide(1)}
            ></div>
            <div className={ slide === 2 ? 'active-indicator' : 'not-active-indicator' }
            onClick={() => switchSlide(2)}
            ></div>
            <div className={ slide === 3 ? 'active-indicator' : 'not-active-indicator' }
            onClick={() => switchSlide(3)}
            ></div>
            <div className={ slide === 4 ? 'active-indicator' : 'not-active-indicator' }
            onClick={() => switchSlide(4)}
            ></div>
            <div className={ slide === 5 ? 'active-indicator' : 'not-active-indicator' }
            onClick={() => switchSlide(5)}
            ></div>
        </div>
    </div>
  )
}

export default Pagination