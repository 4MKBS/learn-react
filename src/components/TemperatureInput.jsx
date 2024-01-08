import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}
export default function TemperatureInput({scale, temperature, changeHandler}) {
    return (
        <>
        <fieldset>
            <legend>enter tempereture in {scaleNames[scale]}</legend>
            <input type="text" value={temperature} onChange={(e)=>changeHandler(e,scale)} />
        </fieldset>
        </>
    )
}
