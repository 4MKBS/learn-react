import React from "react";

class ClickCounter extends React.Component{
    render(){
        const {count,increment}=this.props;
        return (
            <div>
                <h1 onMouseOver={increment}>clicked {count} times</h1>
            </div>
        );
    }
}
export default ClickCounter;