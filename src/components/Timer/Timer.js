import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: props.seconds || 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({seconds: this.state.seconds + 1})
    }

    render() {
        return (
            <div className="Timer">
                <h3 className="Timer-Header">Timer: <span className='Timer-Tick'>{this.state.seconds}</span> seconds</h3>
            </div>
        );
    }
}

export default Timer;