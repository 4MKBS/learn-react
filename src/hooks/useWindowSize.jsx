import React, {useState,useEffect, useCallback} from 'react';

const useWindowSize =(screenWidth)=>{
    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const checkScreenSize =useCallback( () => {
        setOnSmallScreen(window.innerWidth < screenWidth);
    },[screenWidth]);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize]);
    return onSmallScreen;
}

export default useWindowSize;