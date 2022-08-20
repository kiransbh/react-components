import React from 'react';

// stylesheet
import './Instagram.scss';

// dummy data
import { data } from  '../Dummy';

function Instagram() {
  return (
    <div className='instagram_grid_container'>
        {/* Map for looping through each element in an array */}
        {
            data.map((element,index) => {
                return(
                    <div className='complex-grid-container' key={index}>
                        { element.box }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Instagram