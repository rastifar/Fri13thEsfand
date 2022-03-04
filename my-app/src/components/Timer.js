import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time:new Date()
        }
    }
    setTime() {
        this.setState({
            time:new Date()
        })
    }
    componentDidMount() {
        this.interval = setInterval(()=>this.setTime(),1000)
        
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <span>Time :  {this.state.time.toLocaleTimeString()}</span>               
            </div>
        );
    }
}

export default Timer;