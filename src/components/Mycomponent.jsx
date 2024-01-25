import React, { useEffect } from 'react';

const Mycomponent = () => {
    const [count, setCount] = React.useState(0);
    const [time, setTime] = React.useState(new Date());
    const addClick = () => {
        setCount((count) => count + 1);
    };
    const tick = () => {
        console.log('tick');
        setTime(new Date());
    };
    useEffect(()=>{
        console.log('hi');
        document.title=`Clicked ${count} times`;
    },[count]);//[count] means depend on count
    useEffect(()=>{
        console.log('componentDidMount');
        const interval=setInterval(tick,1000);

        return ()=>{
            console.log('componentWillUnmount');
            clearInterval(interval);
        };

    },[]);//[] means componentDidMount
    return (
        <div>
            <p>using function component</p>
          <h1>Time: {time.toLocaleTimeString()} </h1>
          <p>
              <button type='button' onClick={addClick} >Click</button>
          </p>
        </div>
      );
};

export default Mycomponent;