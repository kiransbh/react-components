import React,{ useState } from 'react';

// stylesheet
import './Default.scss';

// Dummy data
import { data } from '../Dummydata';

function Default() {

  // assigning a state in numeric datatype
  const[ accordian, setAccordian ] = useState(0);

  // function to change the state value based on index
  const toggle = (index) => {
      setAccordian(index)
  }

  return (
    <div className='default_accordian'>
      {/* Map for loop through each element in an array */}
          {
            data.map((element, index) => {
              return(
                // Based on the click event the terinary will change the classname when state changes
                <div className='default_accordian-item' key={index}>
                  <div className='title' onClick={() => toggle(index)}>
                    <h2>{element.question}</h2>
                    {/* down arrow */}
                    <div className='down-arrow'></div>
                  </div>
                  <div className={accordian === index ? 'active-content' : 'not-active-content'}>
                    <p>{element.answer}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
  )
}

export default Default