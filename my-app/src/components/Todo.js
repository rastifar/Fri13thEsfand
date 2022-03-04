import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            value:''
        };
      }
      componentDidMount() {
        fetch("/todo.json")
          .then(res => res.json())
          // .then(data=>console.log(data))
          .then((data) => {
            const todos = data.map((todo) => todo.todo);
            this.setState({
              list: [...this.state.list, ...todos],
            });
            // console.log(this.state.list);
          });
    }
    changeHandler = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    clickHandler = () => {
        this.setState({
            list: [...this.state.list, this.state.value],
            value:''
        })
    }
    
      render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.changeHandler} />
                <button onClick={this.clickHandler}>add</button>
                <ul>
                    {this.state.list.map(item => (<li>{item}</li>))}
               </ul>
          </div>
        );
      }
}

export default Todo;