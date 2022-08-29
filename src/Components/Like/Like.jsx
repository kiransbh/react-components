import { useRef, useState, useEffect } from 'react';

// stylesheet
import './Like.scss';

// Image files
import like from './Assests/recommendation.png';
import support from './Assests/support.png';
import heart from './Assests/heart.png';
import celebrate from './Assests/confetti.png';
import think from './Assests/thinking.png';

function Like() {

    const likeRef = useRef();

    const[ likes, setLikes ] = useState([]);
    const[ likeWrapper, setLikeWrapper ] = useState(false);

    const switchLike = (options) => {
        setLikes(options);
        setLikeWrapper(false);
    }

    useEffect(() => {
        const handler = (event) => {
            if(!likeRef.current.contains(event.target)){
                setLikeWrapper(false);
            }
        }

        document.addEventListener('mousedown', handler);

        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const likeOptions = [
        {
            id: 1,
            img: like ,
            alt: 'like'
        },
        {
            id: 2,
            img: support,
            alt: 'support'
        },
        {
            id: 3,
            img: heart,
            alt: 'heart'
        },
        {
            id: 4,
            img: celebrate,
            alt: 'celebrate'
        },
        {
            id: 5, 
            img: think,
            alt: 'think'
        }
    ]

  return (
    <div className='like_wrapper'>
        <div className={likeWrapper ? 'like_container' : 'not_like_container'} ref={likeRef}>
            {
                likeOptions.map((options) => {
                    return (
                        <div className='options_wrapper' key={options.id}>
                            <span>{options.alt}</span>
                            <img src={options.img} alt={options.alt} onClick={() => switchLike(options)} />
                        </div>
                    )
                  })
            }
        </div>
        <div className='display_like_option_wrapper'>
            <img src={likes.img || like} onClick={() => setLikeWrapper(true)}/>
        </div>
    </div>
  )
}

export default Like