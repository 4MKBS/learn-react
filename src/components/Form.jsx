import React from "react";


export default class Form extends React.Component {
    state = {
        name: "mkbs",
        text: "this is text",
        library: "React",
        isAwesome: true,
    };

    handleChange = (e) => {
        if(e.target.type === "text"){
            this.setState({
                name: e.target.value,
           });
        }else if(e.target.type === "textarea"){
            this.setState({
                text: e.target.value,
           });
        }else if(e.target.type === "select-one"){
            this.setState({
                library: e.target.value,
           });
        }else if(e.target.type === "checkbox"){
            this.setState({
                isAwesome: e.target.checked,
           });
        }else{
            console.log("nothing");
            console.log(e.target.type);
        }
            
    }  

    submitHandler = (e) => {
        const { name, text, library, isAwesome} = this.state;
        e.preventDefault();
        console.log(name, text, library, isAwesome);
    };

    render() {
        const { name, text, library, isAwesome} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="enter your name" value={name} onChange={this.handleChange} />
                    <br /><br />
                    <textarea name="text" value={text} onChange={this.handleChange}/>
                    <br /><br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br /><br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}