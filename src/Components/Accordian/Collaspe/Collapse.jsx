import React,{ useState } from 'react';

// stylesheet
import './Collapse.scss';

// Dummy data
import { data } from '../Dummydata';

function Collapse() {

  // assigning a state in numeric datatype
  const[ accordian, setAccordian ] = useState(0);

  // function to change the state value based on index
  const toggle = (index) => {
      setAccordian(index)
    }

  return (
    <div className='collapse_accordian'>
      {/* Map for loop through each element in an array */}
          {
            data.map((element, index) => {
              return(
                // Based on the click event the terinary will change the classname when state changes
                <div className='collapse_accordian-item' key={index}>
                  <div className='title' onClick={() => toggle(index)}>
                    <h2>{element.question}</h2>
                    {/* up and down arrow or anyother symbol add here */}
                    <div className={ accordian === index ? 'up-arrow' : 'down-arrow' }></div>
                  </div>
                  <div className={ accordian === index ? 'active-content' : 'not-active-content' }>
                    <p>{element.answer}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
  )
}

export default Collapse