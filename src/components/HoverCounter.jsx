import React from "react";

export default function ClickCounter({count,increment}){
        return (
            <div>
                <h1 onMouseOver={increment}>clicked {count} times</h1>
            </div>
        );
}
