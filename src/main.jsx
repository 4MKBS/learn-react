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
class Clock extends React.Component{
  render(){
    return(
      <div>
        <h2>Hello  World</h2>
        <h2>Hello React</h2>
        <div className="iammkbs"><h1>I am MKBS</h1></div>
        <img src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/361875275_1317758272426426_4987809083387574303_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XmnT_CgNrusAX-KJS2c&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCBs47org99VgdbTsTo-LLvQ4rqbOO-iTD7x8RjD7iWag&oe=658F23CF" alt="" height={400} width={400}   srcSet="" className='logo' />
        <h1>YOOO - {this.props.children } {new Date().toLocaleTimeString(this.props.local)}</h1>
      </div>
    );
  }
}

const Clockcomponent=new Clock();
ReactDOM.createRoot(document.getElementById('root')).render(
  // Clockcomponent.print(),document.getElementById('root')
  <React.StrictMode>
    {/* <Clock local='bn-BD'/>,
    <Clock />,
    <App/>, */}
    <Clock local='bn-BD'>হায়রে</Clock>
  </React.StrictMode>

  );
  
  