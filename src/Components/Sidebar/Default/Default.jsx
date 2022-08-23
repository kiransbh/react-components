import React,{ useState } from 'react';

// stylesheet
import './Default.scss';

function Default() {

    const[ tab, setTab ] = useState(1);

    const swicthTab = (index) => {
        setTab(index);
    }

  return (
    <div className='default_sidebar_container'>
        <p className={ tab === 1 ? 'active-sidetab' : '' }
        onClick={() => swicthTab(1)}
        >Home</p>
        <p className={ tab === 2 ? 'active-sidetab' : '' }
        onClick={() => swicthTab(2)}
        >Dashboard</p>
        <p className={ tab === 3 ? 'active-sidetab' : '' }
        onClick={() => swicthTab(3)}
        >Sales</p>
        <p className={ tab === 4 ? 'active-sidetab' : '' }
        onClick={() => swicthTab(4)}
        >Settings</p>
        <p className={ tab === 5 ? 'active-sidetab' : '' }
        onClick={() => swicthTab(5)}
        >Explore</p>
        <p className={ tab === 6 ? 'active-sidetab' : '' }
        onClick={() => swicthTab(6)}
        >Profile</p>
    </div>
  )
}

export default Default