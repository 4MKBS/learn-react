import React, {useState,useEffect} from 'react';
import useWindowSize from '../hooks/useWindowSize';

const LayoutComponent = () => {
    const onSmallScreen = useWindowSize(800);
    return (
        <div>
            <h1 className={onSmallScreen?'small':'large'}>This is {onSmallScreen?'small':'large'} screen.</h1>
        </div>
    );
};

export default LayoutComponent;

/*
import React, {useState,useEffect} from 'react';

const LayoutComponent = () => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 600);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize]);
    return (
        <div>
            <h1 className={onSmallScreen?'small':'large'}>This is {onSmallScreen?'small':'large'} screen.</h1>
        </div>
    );
};

export default LayoutComponent;
*/