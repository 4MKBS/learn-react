import { useState } from "react";

function Todo() {
    const [todo,setTodo]=useState('');
    const [warning,setWarning]=useState(null);
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')?'You need Javascript skill to complete this task. Are you sure you know Javascript?':null;

        setTodo(inputValue);
        setWarning(warning);
    }

    return (
        <div>
            <h1>{todo}</h1>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput}></textarea>
            </p>
            <h2>{warning || 'good choice'}</h2>
        </div>
    );
}
export default Todo;