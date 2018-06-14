import React, { Component } from 'react'
import axios from 'axios'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import MapComponent from './MapComponent'
import isEmpty from '../../util/is-empty'

class GurunaviData extends Component {
  constructor(props){
    super(props)
    this.state = {
      gurunaviData: {

      },
      storeData: {

      }
    }
    // this.fetchGurunavi(this.props.latlng.lat, this.props.latlng.lng)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    // this.fetchGurunavi(nextProps.latlng.lat, nextProps.latlng.lng)
  }
  // componentWillMount(){
  //   this.fetchGurunavi(this.props.latlng.lat, this.props.latlng.lng)
  // }
  fetchGurunavi = (lat, lng) => {
    console.log(this.props)
    axios(`http://localhost:5000/api/gurunavi/${lat}/${lng}`)
    .then((res) => {
      return new Promise((resolve, reject) => {
        this.setState(
            prevState => ({
            ...this.state,
              gurunaviData: res
            })
          )
          resolve();
          console.log('a')
          console.log(this.state)
        })
      })
      .then(() => {
        console.log('b')
        console.log(this.state)
        this.addStoreData()
      })
      .catch((err) => console.log(err))
  }
  addStoreData = () => {
    if( !isEmpty(this.state.gurunaviData) ){
      let storeData = this.state.gurunaviData.data.response;
      for(let list in storeData){
        this.setState({
          ...this.state,
          storeData: storeData[list].photo
        })
      }
    }
    console.log('c')
    console.log(this.state)
  }
  render() {
    let data = this.state.storeData;
    // this.state.storeData
    return (
      <div>
        {
          // isEmpty(this.state.gurunaviData) ?
          // console.log(this.state)
          // :
          // data = `<h1>Test<h1>`
        }
        {/* {data} */}
      </div>
    )
  }
}

export default GurunaviData