import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/user";
import Counter from "./components/Counter";



function App() {
    return (
        <div className="app">
            <h1>Hello MARS</h1>
            {/* <ClickCounter />
           <HoverCounter />
            */}
            <Counter>
                {(count, increment) => (
                    <ClickCounter count={count} increment={increment} />
                )}
            </Counter>

            <Counter>
                {(count, increment) => (
                    <HoverCounter count={count} increment={increment} />
                )}
            </Counter>

            <User render={(islogin) => islogin ? 'SAKIB' : 'Ghost'} />

        </div>
    )
}

export default App;