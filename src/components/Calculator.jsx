import React from "react";
import Boiling from "./Boiling";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
   
    render() {
        return (
            <>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
            {/* <Boiling celcius={parseFloat(temperature)} /> */}
            </>
        )
    }
}