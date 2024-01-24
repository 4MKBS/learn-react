import React, {useContext} from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/ThemeContext";

//another function using useContext hooks
export default function Content() {
    const context = useContext(ThemeContext);
    const {theme,switchTheme}=context;
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(count, increment) => (
                    <HoverCounter 
                    theme={theme}
                    count={count} 
                    increment={increment} 
                    switchTheme={switchTheme} 
                    />
                )}
            </Counter>
        </div>
    )
}

//class Content
/*export default class Content extends React.Component {
    render(){
        const {theme,switchTheme}=this.context;
        return (
            <div>
                <h1>This is content</h1>
                <Counter>
                    {(count, increment) => (
                        
                        <HoverCounter 
                        theme={theme}
                        count={count} 
                        increment={increment} 
                        switchTheme={switchTheme} 
                        />
                        
                    )}
                </Counter>
            </div>
        )
    }
}
Content.contextType = ThemeContext;*/
//function Content
/*export default function Content() {
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(count, increment) => {
                    return <ThemeContext.Consumer>
                        {
                        ({theme,switchTheme})=><HoverCounter 
                        theme={theme}
                        count={count} 
                        increment={increment} 
                        switchTheme={switchTheme} 
                        />
                        }
                    </ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    )
}*/