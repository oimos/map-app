import React, { Component } from 'react';
import logo from './logo.svg';
import MapView from './MapView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{height: '300px', width: '300px'}}>
        <MapView />
      </div>
    );
  }
}

export default App;
