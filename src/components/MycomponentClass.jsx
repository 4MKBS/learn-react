import React, { Component } from 'react';

class MycomponentClass extends Component {
    state={
        count:0,
        time: new Date(),
    }
    addClick=()=>{
        this.setState(({count})=>({
            count:count+1
        }));
    }
    tick=()=>{
        console.log('class tick');
        this.setState({
            time: new Date(),
        });
    }
    componentDidMount(){
        const {count}=this.state;
        document.title=`Clicked ${count} times`;
        this.interval=setInterval(this.tick,1000);
    }
    componentDidUpdate(){
        const {count}=this.state;
        document.title=`Clicked ${count} times`;
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
        

  render() {
    const {count, time} = this.state;
    return (
      <div>
        <p>using class component</p>
        <p>Time:{time.toLocaleTimeString()} </p>
        <p>
            <button type='button' onClick={this.addClick} >Click</button>
        </p>
      </div>
    );
  }
}

export default MycomponentClass;