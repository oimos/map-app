import React, { Component } from 'react';
// import logo from './logo.svg';
import Map from '../container/Map'
import LocationSlide from '../container/LocationSlide'
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
          style={{height: '400px', width: '600px'}}>
          <Map />
          <LocationSlide />
          <button onClick={() => this.props.handleClick()}>Add</button>
        </div>
      );
    }
}

export default App;
