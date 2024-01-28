import React, { useEffect,useState,useRef } from 'react';

const Time = () => {
    const [time, setTime] = React.useState(new Date());
    const buttonRef = useRef();

    const tick =()=>{
        setTime(new Date());
    }
    useEffect(()=>{
        buttonRef.current = setInterval(tick,1000);

        return () => clearInterval(buttonRef.current);
    },[]);

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>
        <p>
          <button type='button' onClick={()=>clearInterval(buttonRef.current)}>cleanup</button>
        </p>
    </div>
  );
};

export default Time;