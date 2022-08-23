import React,{ useState, useEffect } from 'react';

// stylesheet
import './Scrolltotop.scss';

function Scrolltotop() {

    const[ show, setShow ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 300 ? setShow(true) : setShow(false)
        })
    }, [ show ]);

    const scrollToTop = () => {
      window.scrollTo(0,0);
    }

  return (
    <div className={ show ? 'scroll_to_top_container' :'' } onClick={scrollToTop}></div>
  )
}

export default Scrolltotop