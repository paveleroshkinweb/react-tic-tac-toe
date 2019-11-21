import React, { Component } from 'react';
import Square from '../Square/Square';
import checkWinner, { getRows } from '../../utils/checkWinner';
import GameEnd from '../GameEnd/GameEnd';
import './Board.css';

class Board extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            squares: Array(props.size ** 2).fill(null),
            currentFigure : 'X',
            winner: ''
        };
        this.state = { ...this.initialState };
        this.countSteps = 0;
        this.onEnd = this.onEnd.bind(this);
    }

    onEnd() {
        this.setState( {...this.initialState} );
    }

    handleClick(index) {
        const squares = this.state.squares.slice();
        let currentFigure = this.state.currentFigure;
        let winner = this.state.winner;
        if (squares[index] == null) {
            this.countSteps++;
            squares[index] = currentFigure;
            currentFigure = currentFigure == 'X' ? 'O' : 'X';
            winner = checkWinner(squares, this.props.size) || winner;
        }
        if (this.countSteps == squares.length && winner == '') {
            winner = 'nobody';
        } 
        this.setState({ squares, currentFigure, winner });
    }

    renderSquare(index) {
        return (
            <Square 
                value={this.state.squares[index]}
                onClick={() => this.handleClick(index)} 
            />
        );
    }

    render() {
        const rows = getRows(this.state.squares, this.props.size);
        let i = 0;
        const hasWinner = !! this.state.winner;
        return (
            <div className='Board-Header-Container'>
                <h1 className='Header'>Next player: {this.state.currentFigure}</h1>
                <div className="Board">
                    {rows.map(row => (
                        <div className="Board-Row">
                            {row.map(() => this.renderSquare(i++))}
                        </div>
                    ))}
                    {hasWinner && <GameEnd winner={this.state.winner} onClick={this.onEnd}/>}
                </div>
                
            </div>
        );
    }
}

export default Board;