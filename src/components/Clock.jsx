import React from 'react'
import Button from './Button'

// let a=React.createElement('div',null,'hello world');
// little bilding block of react is element

class Clock extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={date:new Date()};
    // } //when we need to use props in constructor then we need to pass props in constructor and supers
    state={date:new Date(), local:'bn-BD'};
    componentDidMount(){
      this.clockTimer= setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
      clearInterval(this.clockTimer);
    }
    tick(){
      this.setState(
          {date:new Date()}
      );
    }
    handleClick=(local)=>{
      console.log("button clicked");
      this.setState({local:local});
      // this.setState({local:'en-US'});
    }
    render(){
        const {date, local}=this.state;
        // const {local}=this.props;
        const {children}=this.props;
      return(
        <div>
          <h2>Hello  World</h2>
          <h2>Hello React</h2>
          <div className="iammkbs"><h1>I am MKBS</h1></div>
          <img src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/361875275_1317758272426426_4987809083387574303_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XmnT_CgNrusAX-KJS2c&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCBs47org99VgdbTsTo-LLvQ4rqbOO-iTD7x8RjD7iWag&oe=658F23CF" alt="" height={400} width={400}   srcSet="" className='logo' />

          
          <h1 className='h1'><span>YOOO - {children } {date.toLocaleTimeString(local)}</span></h1>
         {/* <button onClick={this.handleClick}>THIS IS BUTTON</button> */}
         <button onClick={()=>this.handleClick('ar-SA')}>THIS IS BUTTON</button>
         {/* <button onClick={this.handleClick.bind(this,'en-US')}>THIS IS BUTTON</button> */}
        </div>
      );
    }
  }
  export default Clock;
  // const Clockcomponent=new Clock();