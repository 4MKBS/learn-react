import { useContext } from "react";
import { counterContext } from "../App";

const ComponentA = () => {
  const countCotext = useContext(counterContext);
  return (
    <div>
      <h1>Component A</h1>
      <button type='button' onClick={() => countCotext.countdispatch('increment')}>Increment</button>
      <button type='button' onClick={() => countCotext.countdispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default ComponentA;