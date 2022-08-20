import React,{ useState } from 'react';

// stylesheet
import './Twocross.scss';

function Twocross() {

  // assigning a state in boolean datatype 
  const[ handler, setHandler ] = useState(false);

  return (
    // Mobile screen only
    <div className='twocross_hamburgur_container'>
        <div className='navbar'>
            <div className='brand-name'><h1>K.</h1></div>
            {/* The state will get toggled */}
            <div className='hamburgur' onClick={() => setHandler(!handler)}>
                {/* The hamburgur icon creation and the menu handle change it's rotation angle based on state */}
                <i className={ handler ? 'active-top' : 'not-active-top' }></i>
                <i className={ handler ? 'active-bottom' : 'not-active-bottom' }></i>
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

export default Twocross