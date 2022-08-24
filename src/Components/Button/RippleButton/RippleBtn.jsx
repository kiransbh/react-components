import React,{ useState } from 'react';

// stylesheet
import './RippleBtn.scss';

function RippleBtn() {

    const[ ripple, setRipple ] = useState(false);

    const handleClick = () => {
        setRipple(true);
        const timer = setTimeout(() => setRipple(false), 1000);
        return () => clearTimeout(timer);
    }

  return (
    <div className='button'>
        { ripple ? <span /> : '' }
        <button type='submit' onClick={handleClick}>CLICK ME</button>
    </div>
  )
}

export default RippleBtn