import React,{ useState, useEffect } from 'react'

// stylesheet
import './Avatar.scss';

function Avatar() {

    const[ color, setColor ] = useState();
    const[ user, setUser ] = useState();

    const colors = ['red', 'blue', 'orange', 'aqua', 'pink', 'brown', 'marron', 'yellow', 'green', 'grey'];

    useEffect(() => {
        for( let i = 0; i < colors.length; i++ ){
            let color = colors[Math.floor(Math.random() * 10 )]
            setColor(color);
        }
    }, [ color ]);

    const handleChange = (event) => {
        let change = (event.target.value).split(' ').map((letter) => { return letter.charAt(0) }).join('');
        setUser(change);
    }

  return (
    <div className='wrapper'>
        <div className='user'>
            <input type='text' onChange={handleChange} />
        </div>
        <div className='avatar_container' style={{ background: `${color}` }}>
            <h1>{ user }</h1>
        </div>
    </div>
  )
}

export default Avatar