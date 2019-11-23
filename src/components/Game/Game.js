import React from 'react';
import GameContextProvider from '../../contexts/GameContext';
import Timer from '../Timer/Timer';
import Board from '../Board/Board';

const Game = ({ boardSize }) => (
    <GameContextProvider boardSize={+boardSize}>
        <Timer />        
        <Board />
    </GameContextProvider>
)

export default Game;