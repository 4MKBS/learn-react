import React, { useReducer } from 'react';

const initialState=0;
const initialState2=10;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}
const Counter = () => {
   const [count,dispatch]= useReducer(reducer,initialState);
   const [count2,dispatch2]= useReducer(reducer,initialState2);
  return (
    <div>
        <div>
      <div><h1>Count {count}</h1></div>
    <button type='button' onClick={()=>dispatch('increment')}>Increment</button>
    <button type='button' onClick={()=>dispatch('decrement')}>Decrement</button>
    </div>

    <div>
      <div><h1>Count {count2}</h1></div>
    <button type='button' onClick={()=>dispatch2('increment')}>Increment</button>
    <button type='button' onClick={()=>dispatch2('decrement')}>Decrement</button>
    </div>
    </div>
  );
};

export default Counter;