import React, { Component } from 'react';
import './App.css';
import Actions from './Actions';
import Details from './Details';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Actions />
        <Main />
        <Details />
      </div>
    );
  }
}

export default App;
