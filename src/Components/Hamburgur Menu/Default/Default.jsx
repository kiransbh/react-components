import React,{ useState } from 'react';

// stylesheet
import './Default.scss';

function Default() {

  // assigning a state in boolean datatype 
  const[ handler, setHandler ] = useState(false);

  return (
    // Mobile screen only
    <div className='default_hamburgur_container'>
        <div className='navbar'>
            <div className='brand-name'><h1>K.</h1></div>
            {/* The state will get toggled */}
            <div className='hamburgur' onClick={() => setHandler(!handler)}>
                {/* The hamburgur icon creation */}
                <i className='top'></i>
                <i className='center'></i>
                <i className='bottom'></i>
            </div>
        </div>
        {/* Open and close of the menu option container */}
        <div className={ handler ? 'active-options_container' : 'not-active-options_container'}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Default