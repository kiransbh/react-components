import React,{ useState } from 'react';

// stylesheet
import './ToggleSwitch.scss';

function ToggleSwitch() {

    const[ toggle, setToggle ] = useState(false);

  return (
    <div className='toggle-switch_container' onClick={() => setToggle( !toggle )}>
        <div className={ toggle ? 'toggler active-handler' : 'toggler not-active-handler' }></div>
    </div>
  )
}

export default ToggleSwitch