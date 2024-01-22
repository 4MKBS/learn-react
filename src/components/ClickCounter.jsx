import React from 'react';
import WithCounter from './HOC/WithCounter';

const ClickCounter = (props)=>{
    const {count,increment}=props;
    return(
        <div>
            <button type="button" onClick={increment}>clicked {count} times</button>
        </div>
    )
}

export default WithCounter(ClickCounter);