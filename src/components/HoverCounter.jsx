import React from "react";

export default function ClickCounter({count,increment,theme,switchTheme}){
        const styles = theme === "dark" ? {
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            margin: "10px",
        }: null;
        return (
            <div>
                <h1 style={styles} onMouseOver={increment}>Hovered {count} times</h1>
                <button type="button" onClick={switchTheme}>switch theme</button>
            </div>
        );
}
