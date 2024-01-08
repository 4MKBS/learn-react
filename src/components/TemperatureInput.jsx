import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}
export default class TemperatureInput extends React.Component {
    state = {
        temperature: '',
        
    }
    handler = (e) => {
        this.setState({ 
            temperature: e.target.value 
        });
    }
    render() {
        const { temperature } = this.state;
        const { scale } = this.props;
        return (
            <>
            <fieldset>
                <legend>enter tempereture in {scaleNames[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handler} />
            </fieldset>
            </>
        )
    }
}