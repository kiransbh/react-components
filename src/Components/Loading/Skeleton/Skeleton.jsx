import React,{ useState, useEffect } from 'react';

// stylesheet
import './Skeleton.scss';

function Skeleton() {

    const[ loading, setLoading ] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => { setLoading(false) }, 3000)
        return () => clearTimeout(timer);

    }, [ loading ]);

  return (
    <>
    {
        loading 
        ?
        <div className='lazy_container_dummy'>
                <h1 className='title'>Title</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio accusantium rem beatae minima voluptas consequatur, ea magni impedit, maxime odio ex dolorum architecto exercitationem, odit corrupti recusandae qui sit. Obcaecati dolore nemo error exercitationem ut dolores?</p>
                <p className='cta'>Lorem, ipsum</p>
        </div>
        :
        <div className='lazy_container_original'>
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio accusantium rem beatae minima voluptas consequatur, ea magni impedit, maxime odio ex dolorum architecto exercitationem, odit corrupti recusandae qui sit. Obcaecati dolore nemo error exercitationem ut dolores?</p>
            <p>Lorem, ipsum.</p>
        </div>
    }
    </>
  )
}

export default Skeleton