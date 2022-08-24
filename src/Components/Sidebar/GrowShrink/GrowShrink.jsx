import React,{ useState } from 'react';

// stylesheet
import './GrowShrink.scss';

// Options
import { menu } from './Menu';

function GrowShrink() {

    const[ tab, setTab ] = useState(1);
    const[ open, setOpen ] = useState(false);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className={ open ? 'grow_shrink_container' : 'not-grow-shrink'}>
        <h1 onClick={() => setOpen( !open )}>R</h1>
        {
          open
          ?
          menu.map((options, index) => {
            return (
              <p className={ tab === index ? 'active-sidetab' : '' } onClick={() => switchTab(index)}>{ options.fullform }</p>
            )
          })
          :
          menu.map((options, index) => {
            return (
              <p className={ tab === index ? 'active-sidetab-close' : '' } onClick={() => switchTab(index)}>{ options.logo }</p>
            )
          })
        }
    </div>
  )
}

export default GrowShrink