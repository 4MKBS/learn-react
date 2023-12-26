import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// let a=React.createElement('div',null,'hello world');

// little bilding block of react is element
let element = (
  <div>
    <div className="iammkbs"> this 69698365b378cece637c6d015e48db0e</div>
    <p>hello world</p>
    <div>hello world</div>
    <img src="https://i.pinimg.com/280x280_RS/69/69/83/69698365b378cece637c6d015e48db0e.jpg" alt="" srcSet="" />
    <h1>{new Date().toLocaleTimeString()}</h1>
  </div>
);//for multi line jsx we need to use () to wrap the jsx
console.log(element);
// console.log(a.type);
console.log(element.props.children[2].props);

ReactDOM.createRoot(document.getElementById('root')).render(element)



