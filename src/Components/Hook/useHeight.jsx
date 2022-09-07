import { useState, useEffect } from 'react';

function useHeight() {
    const[ scrollPosition, setscrollPosition ] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let scrollAmount = Math.floor(scrollPosition);
    let heightOfDocument = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollPercentage = ( scrollAmount / heightOfDocument ) * 100;

    return { scrollPercentage };
}

export default useHeight