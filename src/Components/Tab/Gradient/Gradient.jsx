import React,{ useState } from 'react';

// stylesheet
import './Gradient.scss';

function Gradient() {
  // creating a state in numeric datatype 
  const[ tab, setTab ] = useState(1);

  // function to change the state based on the index value
  const switchTab = (index) => {
      setTab(index)
  }

  return (
    <div className='gradient_tab_container'>
        <div className='tab_wrapper'>
          {/* The classname changes based on the toggle state */}
          {/* The active state indicated by a gradient color in pseudo class element */}
            <p className={ tab === 1 ? 'active-tab' : '' } onClick={() => switchTab(1)}>ALL</p>
            <p className={ tab === 2 ? 'active-tab' : '' } onClick={() => switchTab(2)}>IMAGES</p>
            <p className={ tab === 3 ? 'active-tab' : '' } onClick={() => switchTab(3)}>VIDEOS</p>
            <p className={ tab === 4 ? 'active-tab' : '' } onClick={() => switchTab(4)}>GALLERY</p>
            <p className={ tab === 5 ? 'active-tab' : '' } onClick={() => switchTab(5)}>SETTINGS</p>
            <p className={ tab === 6 ? 'active-tab' : '' } onClick={() => switchTab(6)}>TOOLS</p>
        </div>
    </div>
  )
}

export default Gradient