import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change:currentChange} = this.props;
    const { change: nextChange } = nextProps;
    if(currentChange === nextChange){
      return false;
    }
    return true;
  }
  render() {
    console.log("button render");
    const { change,local} = this.props;
    return(
      <button onClick={()=>{
        change(local);
      }}>
        Click me
      </button>
    );
  }
}

export default Button;