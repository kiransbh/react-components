import React,{ useState } from 'react';

// stylesheet
import './Dot.scss';

function Dot() {
  // creating a state in numeric datatype
  const[ tab, setTab ] = useState(1);  

  // function to change the state based on the index value
  const switchTab = (index) => {
      setTab(index)
  }

  return (
    <div className='dot_tab_container'>
        <div className='tab_wrapper'>
            {/* The classname changes based on the toggle state */}
            <p className={ tab === 1 ? 'active-tab' : '' } onClick={() => switchTab(1)}>
                ALL
                {/* The active state will be indicated by a black dot based on state change */}
                <div className={ tab === 1 ? 'active-dot' : 'not-active-tab' }></div>
            </p>
            <p className={ tab === 2 ? 'active-tab' : '' } onClick={() => switchTab(2)}>
                IMAGES
                <div className={ tab === 2 ? 'active-dot' : 'not-active-tab' }></div>
            </p>
            <p className={ tab === 3 ? 'active-tab' : '' } onClick={() => switchTab(3)}>
                VIDEOS
                <div className={ tab === 3 ? 'active-dot' : 'not-active-tab' }></div>
            </p>
            <p className={ tab === 4 ? 'active-tab' : '' } onClick={() => switchTab(4)}>
                GALLERY
                <div className={ tab === 4 ? 'active-dot' : 'not-active-tab' }></div>
            </p>
            <p className={ tab === 5 ? 'active-tab' : '' } onClick={() => switchTab(5)}>
                SETTINGS
                <div className={ tab === 5 ? 'active-dot' : 'not-active-tab' }></div>
            </p>
            <p className={ tab === 6 ? 'active-tab' : '' } onClick={() => switchTab(6)}>
                TOOLS
                <div className={ tab === 6 ? 'active-dot' : 'not-active-tab' }></div>
            </p>
        </div>
    </div>
  )
}

export default Dot