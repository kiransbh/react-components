import React from 'react';

// stylesheet
import './Input.scss';

function Input() {
  return (
    <div className='input_container'>
        <input type='text' required='true' />
        <label>Username</label>
    </div>
  )
}

export default Input