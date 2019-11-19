import React, { Component } from 'react';
import Square from '../Square/Square';
import checkWinner, { getRows } from '../../utils/checkWinner';
import './Board.css';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(props.size ** 2).fill(null),
            currentFigure : 'X',
            winner: ''
        }
        this.count = 0;
    }

    handleClick(index) {
        const squares = this.state.squares.slice();
        let currentFigure = this.state.currentFigure;
        let winner = this.state.winner;
        if (squares[index] == null) {
            this.count++;
            squares[index] = currentFigure;
            currentFigure = currentFigure == 'X' ? 'O' : 'X';
            winner = checkWinner(squares, this.props.size) || winner;
        }
        if (this.count == squares.length && winner == '') {
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
                {hasWinner ? <h2 className='Winner'>Winner: {this.state.winner}</h2> : ''}
                <div className="Board">
                    {rows.map(row => (
                        <div className="Board-Row">
                            {row.map(() => this.renderSquare(i++))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Board;