import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <label>{this.props.labelName}</label>
                <br/>
                <input onChange={this.props.changeHandler} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Input;