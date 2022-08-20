import React from 'react';

// stylesheet
import './Badge.scss';

function Badge() {
  return (
    <div className='badge_container'>
      {/* data count is used to change the count dynamically */}
        <button data-count='5'>Notification</button>
        <button data-count='7'>Activity</button>
        <button data-count='3'>Bell</button>
    </div>
  )
}

export default Badge