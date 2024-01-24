import { useState } from "react";


function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const { title, description } = todo;
    return (
        <div>
            <h1>{title}</h1>
            <p>
                <input type="text" value={title} onChange={(e) => setTodo(
                    {
                        ...todo,
                        title: e.target.value,
                    }
                )} />
            </p>
            <p>
                <textarea name="todo" value={description} onChange={(e) => setTodo(
                    {
                        ...todo,
                        description: e.target.value,
                    }
                )}></textarea>
            </p>
        </div>
    );
}

// useState with object and array here is we need to use spread operator
/*
 function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const { title, description } = todo;
    return (
        <div>
            <h1>{title}</h1>
            <p>
                <input type="text" value={title} onChange={(e) => setTodo(
                    {
                        ...todo,
                        title: e.target.value,
                    }
                )} />
            </p>
            <p>
                <textarea name="todo" value={description} onChange={(e) => setTodo(
                    {
                        ...todo,
                        description: e.target.value,
                    }
                )}></textarea>
            </p>
        </div>
    );
}
*/
export default Todo;