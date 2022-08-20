import React,{ useRef, useState, useEffect } from 'react';

// stylesheet
import './Default.scss';

function Default() {

    // Reference to the model
    const dropdownRef = useRef(null);

    // Setting the state in boolean datatype
    const[ openDropdown, setOpenDropdown ] = useState(false);

    useEffect(() => {
        // function for click event to close the div while clicking outside of the div
        const handler = (event) => {
            if(!dropdownRef.current.contains(event.target)){
                setOpenDropdown(false);
            }
        }

        // setting the function to eventlistener
        document.addEventListener('mousedown', handler);

        // removing the event once it get triggered
        return () => document.removeEventListener('mousedown', handler);
    }, []);

  return (
    <div className='default_dropdown_container'>
        <nav>
            <ul>
                <li><p>Home</p></li>
                <li><p>About</p></li>
                <li>
                    {/* toggling the state on click event */}
                    <p onClick={() => setOpenDropdown(true)}>Course</p>
                    {/* open and close state of the div based on toggle state */}
                    <div className={ openDropdown ? 'active-dropdown' : 'not-active-dropdown' } ref={dropdownRef}>
                        <ul>
                            <li>Javascript</li>
                            <li>C++</li>
                            <li>C</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </li>
                <li><p>Contact</p></li>
            </ul>
        </nav>
    </div>
  )
}

export default Default