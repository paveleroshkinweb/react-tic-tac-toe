import React, { Component } from 'react';
import getWinner from '../utils/getWinner';

const GameContext = React.createContext();

class GameContextProvider extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            squares: Array(props.boardSize ** 2).fill(null),
            time: 0,
            currentFigure: 'X',
            winner: '',
            hasWinner: false
        }
        const stateFromStorage = JSON.parse(localStorage.getItem('state'));
        this.state = {...(stateFromStorage || this.initialState)};
        this.onGameEndHandler = this.onGameEndHandler.bind(this);
        this.onPlayerClick = this.onPlayerClick.bind(this);
        this.onTick = this.onTick.bind(this);
    }

    componentDidMount() {
        window.onbeforeunload = () => localStorage.setItem('state', JSON.stringify(this.state));
    }

    onGameEndHandler() {
        this.setState({ ...this.initialState })
    }

    onPlayerClick(index) {
        const squares = this.state.squares.slice();
        const currentFigure = this.state.currentFigure;
        let nextFigure = this.state.currentFigure;
        let winner = this.state.winner;
        let hasWinner = false;
        if (squares[index] == null) {
            squares[index] = currentFigure;
            winner = getWinner(squares, this.props.boardSize);
            hasWinner = !! winner;
            nextFigure = currentFigure == 'X' ? 'O' : 'X'
        }
        if (squares.every(square => square != null) && ! hasWinner) {
            winner = 'nobody';
        }
        this.setState({ squares, hasWinner, winner, currentFigure: nextFigure })
    }

    onTick() {
        const currentTime = this.state.time;
        this.setState({ time: currentTime + 1 })
    }

    render() {
        return (
            <GameContext.Provider value={{
                state: this.state,
                boardSize: this.props.boardSize,
                onGameEndHandler: this.onGameEndHandler,
                onPlayerClick: this.onPlayerClick,
                onTick: this.onTick
            }}>
                {this.props.children}
            </GameContext.Provider>
        )
    }
}

export { GameContextProvider as default, GameContext };