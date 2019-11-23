import React, { Component } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './GameEnd.css';

class GameEnd extends Component {

    render() {
        return (
            <GameContext.Consumer>
                {(context) => (
                    <div className='GameEnd'>
                        <div className='Container'>
                            <div className='Winner'>Winner: {context.state.winner}</div>
                            <div className='Duration'>Duration time: {context.state.time} seconds</div>
                            <button className='Again-btn' onClick={context.onGameEndHandler}>Try again</button>
                        </div>
                    </div>
                )}
            </GameContext.Consumer>
        );
    }
}

GameEnd.contextType = GameContext;

export default GameEnd;