import React from 'react';

// stylesheet
import './Modern.scss';

function Modern() {
  return (
    <div className='input_container'>
        <input type='text' required='true' />
        <label>Username</label>
    </div>
  )
}

export default Modern