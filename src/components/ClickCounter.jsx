import React from "react";

class ClickCounter extends React.Component{
    render(){
        const {count,increment}=this.props;
        return (
            <div>
                <button type="button" onClick={increment}>clicked {count} times</button>
            </div>
        );
    }
}
export default ClickCounter;