import React from 'react';

const Text = ({addEmoji,addBracket})=>{
        let  text="Khairul Bashar Sakib";
        if(addEmoji){
            text=addEmoji(text,"❤️");
        }
        if(addBracket){
            text=addBracket(text);
        }
    return (
        <h1>
            {text}
        </h1>
    );
}

export default Text;