import React from "react";
import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
import Section  from "./components/Section";
import ThemeContext from "./contexts/ThemeContext";




export default class App extends React.Component {
    state ={
        theme: "dark"
    };
    render(){
        const {theme} = this.state;
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
    
                <ThemeContext.Provider value={{theme:theme}}><Section /></ThemeContext.Provider>
    
            </div>
        )
    }
}
