import React, { Component } from 'react';
import Square from '../Square/Square';
import './Board.css';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(props.size ** 2).fill(null),
            currentFigure : 'X',
            winner: ''
        }
    }

    handleClick(index) {
        const squares = this.state.squares.slice();
        let currentFigure = this.state.currentFigure;
        if (squares[index] == null) {
            squares[index] = currentFigure;
            currentFigure = currentFigure == 'X' ? 'O' : 'X';
        }
        this.setState({ squares, currentFigure });
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
        return (
            <div className='Board-Header-Container'>
                <h1 className='Header'>Next player: {this.state.currentFigure}</h1>
                <div className="Board">
                    <div className="Board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="Board-Row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="Board-Row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;