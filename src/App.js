import React, { Component } from 'react';
import './App.css';
import Commands from './Commands';
import Details from './Details';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Commands />
        <Main />
        <Details />
      </div>
    );
  }
}

export default App;
