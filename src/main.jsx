import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

let state=[];
let stateIndex=-1;
function useState(defaultValue){
  const index=++stateIndex;
  if(state[index]) return state[index];
  const setValue = (newValue)=>{
    state[index][0]= newValue;

    renderWithmkbs();
  }
  const returnArray = [defaultValue,setValue];
  state[index]=returnArray;
  return returnArray;
}
function App() {
  const [todo,setTodo]=useState('');
  const [warning,setWarning]=useState(null);
  const handleInput = (e) => {
      const inputValue = e.target.value;
      const warning = inputValue.includes('.js')?'You need Javascript skill to complete this task. Are you sure you know Javascript?':null;

      setTodo(inputValue);
      setWarning(warning);
  }

  return (
      <div>
          <h1>{todo}</h1>
          <p>
              <textarea name="todo" value={todo} onChange={handleInput}></textarea>
          </p>
          <h2>{warning || 'good choice'}</h2>
      </div>
  );
}

const container = document.getElementById('root');
const root =ReactDOM.createRoot(container);

function renderWithmkbs(){
  stateIndex=-1;
  root.render(<App />)
}
renderWithmkbs();