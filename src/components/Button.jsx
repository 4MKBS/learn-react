import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change:currentChange,local:currentLocal} = this.props;
    const { change: nextChange,local:nextLocal } = nextProps;
    if(currentChange === nextChange && currentLocal === nextLocal){
      return false;
    }
    return true;
  }
  render() {
    const { change,local,children,show,enable} = this.props;
    if(!enable) return null;
    return(<>
      <button onClick={()=>{
        change(local);
      }}>
        {local === 'bn-BD' ? 'বাংলা' : 'আরবি'}
      </button>
      { show && <p>Bashar</p> }
    </>
    );
  }
}

export default Button;