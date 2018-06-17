import React, { Component } from 'react';
// import logo from './logo.svg';
import MapView from '../container/MapView'
import GurunaviMapView from '../container/GurunaviMapView'
import './App.css';

class App extends Component {
  // render() {
    constructor(props){
      super(props);
      console.log('constructor', props);
    }

    componentWillMount(){
      console.log('componentWillMount',this.props);
    }
    componentDidMount(){
      console.log('componentDidMount',this.props);
    }
    componentWillReceiveProps(nextProps){
      console.log('componentWillReceiveProps', nextProps);
    }

    render(){
      return (
        <div
          className="App"
          style={{height: '800px', width: '600px'}}>
          <MapView />
          <GurunaviMapView />
          <button onClick={() => this.props.handleClick()}>Add</button>
        </div>
      );
    }
}

export default App;
