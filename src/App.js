import React, { Component } from 'react';
import './App.css';
import Sales from './Sales';

class App extends Component {
  render() {

    var books = [
      { title: "A little life", author: "Hanya Yanagihara", price: 8.99},
      { title: "The power", author: "Naomi Alderman", price: 9.99},
      { title: "Homo Deus", author: "Yuval Noah Harari", price: 12.99},
      { title: "Norse Mythology", author: "Neil Gaiman", price: 18.99},
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Sales App</h1>
        </header>
        <Sales items={books} />
      </div>
    );
  }
}

export default App;
