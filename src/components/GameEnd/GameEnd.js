import React from 'react';
import './GameEnd.css';

function GameEnd(props) {
    return (
        <div className='GameEnd'>
            <div className='Container'>
                <div className='Winner'>Winner: {props.winner}</div>
                <button className='Again-btn' onClick={props.onClick}>Try again</button>
            </div>
        </div>

    )
}

export default GameEnd;