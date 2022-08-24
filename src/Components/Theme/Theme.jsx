import React,{ useState, useEffect } from 'react'

// stylesheet
import './DarkLight.scss';

function DarkLight() {

    const[ dark, setDark ] = useState(false);
    const[ theme, setTheme ] = useState('light-theme');

    const toggleTheme = () => { 
      setDark( !dark );
      ( theme === 'dark-theme' ) ? setTheme('light-theme') : setTheme('dark-theme') 
    }

    // The css for theme are in index.css file
    useEffect(() => {
      document.body.className = theme;
    }, [ theme ]);

  return (
    <>
    <p>{ theme }</p>
    <br/>
    <div className='toggle-switch_container' onClick={toggleTheme}>
        <div className={ dark ? 'active-handler' : 'not-active-handler' }></div>
    </div>
    </>
  )
}

export default DarkLight