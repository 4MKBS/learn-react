import React, { Component } from 'react';

class TodoClass extends Component {
    state = { 
        todo:'',
        warning: null,
    }
    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')?'You need Javascript skill to complete this task. Are you sure you know Javascript?':null;

        this.setState({
            todo: inputValue,
            warning,
        });
    }
    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <h1>{todo}</h1>
                <p>
                    <textarea name="todo" value={todo} onChange={this.handleInput}></textarea>
                </p>
                <h2>{warning || 'good choice'}</h2>
            </div>
        );
    }
}

export default TodoClass;