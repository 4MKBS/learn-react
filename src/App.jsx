import React,{useEffect} from 'react';
import MycomponentClass from './components/MycomponentClass';
import Mycomponent from './components/Mycomponent';

export default function App(){
    const [show, setShow] = React.useState(true);
    
    return (
        <div className="app">
            <h1>React App</h1>
            {/* {show && <MycomponentClass/>} */}
            {show && <Mycomponent/>}
            <p>
                <button type='button' onClick={()=>setShow((ps)=>(!ps))}>{show ? 'hide':'show'}</button>
            </p>
        </div>
    )
}

// useEffect function 
/*
we can use useEffect function to do the same thing as componentDidMount, componentDidUpdate, componentWillUnmount

*/
