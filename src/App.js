import React, { Component, Fragment } from 'react';
import Timer from './components/Timer/Timer';
import Board from './components/Board/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Timer />
        <Board size='5' />
      </Fragment>
    )
  }
}

export default App;
