import React from "react";
import Boiling from "./Boiling";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };
   handler=(e,scale)=>{
         this.setState({
              temperature: e.target.value,
              scale,
         });
   };
    render() {
        const {temperature,scale}=this.state;
        const celsius=scale==='f'?convert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?convert(temperature,toFahrenheit):temperature;
        return (
            <>
            <TemperatureInput scale="c" temperature={celsius} changeHandler={this.handler} />
            <TemperatureInput scale="f" temperature={fahrenheit} changeHandler={this.handler} />
            <Boiling celcius={parseFloat(temperature)} scl={scale} />
            </>
        )
    }
}