import React, { Component } from 'react';
import './App.css';
import Sales from './Sales';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Sales App</h1>
        </header>
        <Sales />
      </div>
    );
  }
}

export default App;
