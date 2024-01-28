import React from 'react';

const Input = ({type,placeholder},ref) => {
  return (
    <input ref={ref} type={type} placeholder={placeholder}/>
  );
};
const forwardInp = React.forwardRef(Input);

export default forwardInp;