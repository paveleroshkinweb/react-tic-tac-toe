import React, { Component } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './Timer.css';

class Timer extends Component {

    componentDidMount() {
        this.startInterval();
    }

    componentDidUpdate() {
        if (! this.interval && ! this.context.state.hasWinner) {
            this.startInterval();
        }
    }

    contextHandler(context) {
        if (context.state.hasWinner) {
            this.stopInterval();
        }
        return (
            <div className="Timer">
                <h3 className="Timer-Header">Timer: <span className='Timer-Tick'>{context.state.time}</span> seconds</h3>
            </div>
        );
    }

    startInterval() {
        this.interval = setInterval(() => this.context.onTick(), 1000);
    }

    stopInterval() {
        clearInterval(this.interval);
        this.interval = null;
    }

    render() {
        return (
            <GameContext.Consumer>
                {this.contextHandler.bind(this)}
            </GameContext.Consumer>
        );
    }
}

Timer.contextType = GameContext;

export default Timer;