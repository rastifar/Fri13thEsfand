import React, { Component } from 'react';

class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            value:'',
            list:['Home Work','Exercise','Walking','Call friend']
        }
        this.add = this.add.bind(this)
    }
    add() {
        this.setState({
            list: [...this.state.list, this.state.value],
            value:''
        })
    }
    render() {
        return (
            <ul>
                <li>
                <input type='text' value={this.state.value}
                    onChange={e=>this.setState({value:e.target.value}) } />
                <button onClick={this.add}>add</button>
                </li>
                {this.state.list.map(item => <li>{item}</li>)}

                {/* <li>Home Work</li>
                <li>Exercise</li>
                <li>Walking</li>
                <li>Call friend</li> */}
            </ul>
        );
    }
}

export default Todolist;