import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/ThemeContext";

export default function Content() {
    return (
        <div>
            <h1>This is content</h1>
            <Counter>
                {(count, increment) => {
                    return <ThemeContext.Comsumer>
                        {({theme})=><HoverCounter theme={theme} count={count} increment={increment} />}
                    </ThemeContext.Comsumer>
                }}
            </Counter>
        </div>
    )
}