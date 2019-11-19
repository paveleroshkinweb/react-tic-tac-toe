import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './components/Timer/Timer';
import Board from './components/Board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Timer />
        <Board size='5' />
      </React.Fragment>
    );
  }
}

export default App;
