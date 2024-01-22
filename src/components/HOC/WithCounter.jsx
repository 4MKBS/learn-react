import React from 'react';

const WithCounter = (OriginalCounter)=>{
    class NewCounter extends React.Component{
        state = {
            count: 0,
        };
        increment=()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        };
        render(){
            const {count}=this.state;
            return <OriginalCounter count={count} increment={this.increment} />;
        }
    }
    return NewCounter;
}

export default WithCounter;