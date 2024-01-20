import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text,  emoji) => `${emoji} ${text} ${emoji}`;
    render(ov) {
        let text = "Khairul Bashar Sakib";
        if(ov) {
            text = ov;
        }
        return (
                <h1>{text}</h1>
        )
    }
}