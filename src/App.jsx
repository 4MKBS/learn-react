// import React, {useReducer} from 'react';
// import Counter from './components/Counter';
// import ComplexCounter from './components/ComplexCounter';
// import CounterThree from './components/CounterThree';
// import ComponentA from './components/ComponentA';
// // import { useReducer } from 'react';

// export const counterContext = React.createContext();

// const initialState=0;
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//             return state+1;
//         case 'decrement':
//             return state-1;
//         default:
//             return state;
//     }
// }

// const App = () => {
//   const [count,dispatch]= useReducer(reducer,initialState);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <counterContext.Provider value={{countdispatch:dispatch}}>
//       <ComponentA />
//       </counterContext.Provider>
      


//      {/* <Counter/> */}
//      {/* <ComplexCounter /> */}
//     {/* <CounterThree /> */}
//     </div>
//   );
// };

// export default App;
import React from 'react';
import GetPost from './components/GetPost';
import GetPost2 from './components/GetPost2';

const App = () => {
  return (
    <div className='app'>
      <GetPost />
      <GetPost2 />
    </div>
  );
};

export default App;