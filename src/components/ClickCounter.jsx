import React from "react";

export default function ClickCounter({count,increment}){
        return (
            <div>
                <button type="button" onClick={increment}>clicked {count} times</button>
            </div>
        );
}