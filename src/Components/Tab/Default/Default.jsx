import React,{ useState } from 'react';

// stylesheet
import './Default.scss';

function Default() {

  // creating a state in numeric datatype 
  const[ tab, setTab ] = useState(1);

  // function to change the state based on the index value
  const switchTab = (index) => {
      setTab(index)
  }

  return (
    <div className='default_tab_container'>
        <div className='tab_wrapper'>
          {/* The classname changes based on the toggle state */}
          {/* On click event, each time the state will set and active state will be indicated by border bottom */}
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

export default Default