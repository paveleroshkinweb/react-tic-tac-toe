import React, { Component } from 'react';
import { GameContext } from '../../contexts/GameContext';
import Square from '../Square/Square';
import { getRows } from '../../utils/getWinner';
import GameEnd from '../GameEnd/GameEnd';
import './Board.css';

class Board extends Component {

    renderSquare(index) {
        return (
            <Square 
                value={this.context.state.squares[index]}
                onClick={() => this.context.onPlayerClick(index)} 
            />
        );
    }

    render() {
        const rows = getRows(this.context.state.squares, this.context.boardSize);
        const hasWinner = this.context.state.hasWinner;
        const currentFigure = this.context.state.currentFigure;
        let i = 0;
        return (
            <div className='Board-Header-Container'>
                <h1 className='Header'>Next player: {currentFigure}</h1>
                <div className="Board">
                    {rows.map(row => (
                        <div className="Board-Row">
                            {row.map(() => this.renderSquare(i++))}
                        </div>
                    ))}
                    {hasWinner && <GameEnd />}
                </div>
            </div>
        );
    }
}

Board.contextType = GameContext;

export default Board;