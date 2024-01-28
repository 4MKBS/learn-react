import React from 'react';
import Form from './components/Form.jsx';
import MyTime from './components/Time';
const App = () => {
  return (
    <div>
      <div>
        <MyTime />
        <Form />
      </div>
    </div>
  );
};

export default App;