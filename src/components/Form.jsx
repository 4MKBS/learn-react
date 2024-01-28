import React, { useEffect,useRef } from 'react';
import Input from './Input';
const Form = () => {
    const inputref = useRef(null);

    useEffect(()=>{
        inputref.current.focus();
    },[]);

  return (
    <div>
      <p>
        <span></span>
        <Input ref={inputref} type="number" placeholder='enter my key' />
      </p>
    </div>
  );
};

export default Form;