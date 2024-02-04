import React, { useReducer } from 'react';

const initialState={
    counter:0,
    counter2:5,
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state, counter: state.counter+action.value,}
        case 'decrement':
            return {...state, counter: state.counter-action.value,};
        case 'increment2':
            return {...state, counter2: state.counter2+action.value,}
        case 'decrement2':
            return {...state, counter2: state.counter2-action.value,};
        default:
            return {counter: state};
    }
}
const Counter = () => {
   const [count,dispatch]= useReducer(reducer,initialState);
  return (
    <div>
    <div>
      <div><h1>Count {count.counter}</h1></div>
    <button type='button' onClick={()=>dispatch({
        type:'increment',
        value:1,
    })}>Increment by 1</button>

    <button type='button' onClick={()=>dispatch({
        type: 'decrement',
        value:1,
    })}>Decrement by 1</button>
    </div>
    <div>
      <div><h1>Count {count.counter2}</h1></div>
    <button type='button' onClick={()=>dispatch({
        type:'increment2',
        value:1,
    })}>Increment2 by 1</button>

    <button type='button' onClick={()=>dispatch({
        type: 'decrement2',
        value:1,
    })}>Decrement2 by 1</button>
    </div>
    </div>
  );
};

export default Counter;