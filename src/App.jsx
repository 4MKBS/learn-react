import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";


function App(){
    return (
        <div className="app">
           <h1>Hello MARS</h1>
           <ClickCounter />
           <HoverCounter />
        </div>
    )
}

export default App;