// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {};

type State = {};

class App extends Component<Props, State> {

  handleClassClick = (event: Object): void => console.log(event.target.className)

  render() {
    return (
      <div className="App" onClick={this.handleClassClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VPlayer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
