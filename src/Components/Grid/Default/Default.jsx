import React from 'react';

// stylesheet
import './Default.scss';

// dummy data
import { data } from  '../Dummy';

function Default() {
  return (
    <div className='default_grid_container'>
        {/* Map for looping through each element in an array */}
        {
            data.map((element,index) => {
                return(
                    <div className='grid-container' key={index}>
                        { element.box }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Default