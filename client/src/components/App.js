import React, { Component } from 'react';
// import logo from './logo.svg';
import MapView from '../container/MapView'
import GurunaviMapView from '../container/GurunaviMapView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{height: '400px', width: '600px'}}>
        <MapView />
        <GurunaviMapView />
        <button onClick={() => this.props.handleClick()}>Add</button>
      </div>
    );
  }
}

export default App;
