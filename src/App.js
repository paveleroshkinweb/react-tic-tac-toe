import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/Board/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <Board size='5' />
    );
  }
}

export default App;
