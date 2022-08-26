import React, { useState } from 'react';

// custom hook
import usePasswordToggle from '../Hook/UsePasswordToggle';

// stylesheet
import './Form.scss';

function Form() {

    const[ password, setPassword ] = useState('');
    const [ inputType, icon, click ] = usePasswordToggle();

  return (
    <div className='form_container'>
        <div className='password_toggle'>
            <input 
            type={inputType} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={click}>{icon}</span>
        </div>
        <div className='password_strength'
        style={{
            width:`${ password.length === 0 ? '0%' : password.length < 3 ? '33.33%' : password.length < 6 ? '33.33%' : password.length < 9 ? '67%' : '100%' }`, 
            background:`${ password.length === 0 ? 'red' : password.length < 3 ? 'red' : password.length < 6 ? 'blue' : password.length < 9 ? 'blue' : 'green' }`
        }}
        ></div>
    </div>
  )
}

export default Form