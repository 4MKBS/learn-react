import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/user";
import Counter from "./components/Counter";



function App(){
    return (
        <div className="app">
           <h1>Hello MARS</h1>
           {/* <ClickCounter />
           <HoverCounter />
            */}
           <Counter render={(count,increment)=>(<ClickCounter count={count} increment={increment} />)} />

           <Counter render={(count,increment)=>(<HoverCounter count={count} increment={increment} />)} />

           <User render={(islogin)=> islogin?'SAKIB':'Ghost'} />

        </div>
    )
}

export default App;