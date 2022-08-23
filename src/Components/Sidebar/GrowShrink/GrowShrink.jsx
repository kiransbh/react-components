import React,{ useState } from 'react';

// stylesheet
import './GrowShrink.scss';

function GrowShrink() {

    const[ tab, setTab ] = useState(1);
    const[ open, setOpen ] = useState(false);

    const swicthTab = (index) => {
        setTab(index);
    }

  return (
    <div className={ open ? 'grow_shrink_container' : 'not-grow'}>
        <h1 onClick={() => setOpen( !open )}>R</h1>
        {
            open
            ?
            <>
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
            </>
            :
            <>
            <p className={ tab === 1 ? 'active-sidetab-close' : '' }
            onClick={() => swicthTab(1)}
            >H</p>
            <p className={ tab === 2 ? 'active-sidetab-close' : '' }
            onClick={() => swicthTab(2)}
            >D</p>
            <p className={ tab === 3 ? 'active-sidetab-close' : '' }
            onClick={() => swicthTab(3)}
            >S</p>
            <p className={ tab === 4 ? 'active-sidetab-close' : '' }
            onClick={() => swicthTab(4)}
            >S</p>
            <p className={ tab === 5 ? 'active-sidetab-close' : '' }
            onClick={() => swicthTab(5)}
            >E</p>
            <p className={ tab === 6 ? 'active-sidetab-close' : '' }
            onClick={() => swicthTab(6)}
            >P</p>
            </>
        }
    </div>
  )
}

export default GrowShrink