import React from 'react'
import Button from './Button'

class Clock extends React.Component{
    state={date:new Date(),local:'bn-BD'};
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
      this.setState({local:local});
    }
    render(){
        const {date, local}=this.state;
        const {children}=this.props;

      // let mybutton;
      // if(local==='bn-BD'){
      //   mybutton=(
      //   <Button change={this.handleClick} local='ar-SA'>
      //      Click me to AR
      //   </Button>
      //   );
      // }else{
      //   mybutton=(
      //   <Button change={this.handleClick} local='bn-BD'>
      //      Click me to BN
      //   </Button>
      //   );
      // }

      return(
        <div>
          <h2>Hello  World</h2>
          <h2>Hello React</h2>
          <div className="iammkbs"><h1>I am MKBS</h1></div>
          <img src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/361875275_1317758272426426_4987809083387574303_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XmnT_CgNrusAX-KJS2c&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCBs47org99VgdbTsTo-LLvQ4rqbOO-iTD7x8RjD7iWag&oe=658F23CF" alt="" height={400} width={400}   srcSet="" className='logo' />

          
          <h1 className='h1'><span>YOOO - {children } {date.toLocaleTimeString(local)}</span></h1>
         {local === 'bn-BD' ?(
          <Button change={this.handleClick} local='ar-SA' show={false} enable />
         ):(
          <Button change={this.handleClick} local='bn-BD' show enable />
         )}
        </div>
      );
    }
  }
  export default Clock;