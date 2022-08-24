import React,{ useState } from 'react';

// stylesheet
import './Slider.scss';

// Category
import { data } from './Data';

function Slider() {

    const[ visible, setVisible ] = useState(false);

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 240;

        slider.scrollLeft < 300 ? setVisible(false) : setVisible(true)
    }

    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 240;

        slider.scrollLeft > 0 ? setVisible(true) : setVisible(false)
    }

  return (
    <div className='slider_container'>
        <div className={ visible ? 'slide_handler_prev_btn' : 'not_active_slide_handle' } onClick={slideLeft}></div>
        <div id='slider'>
        {
            data.map(( element, index ) => {
                return (
                    <button type='submit' key={index}>{ element.category }</button>
                )
            })
        }
        </div>
        <div className='slide_handler_next_btn' onClick={slideRight}></div>
    </div>
  )
}

export default Slider