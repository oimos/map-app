import React, { Component, Fragment } from 'react'
import MapComponent from './map/MapComponent'

class MapView extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentLatLng: props.currentLatLng,
      geolocationEnabled: false,
      isMarkerShown: false
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      currentLatLng: nextProps.currentLatLng,
      geolocationEnabled: nextProps.geolocationEnabled
    })
    this.delayedShowMarker()
  }

  componentDidMount = () => {
    this.props.handleCurrentLocation();
  }

  delayedShowMarker = () => {
    this.setState({ isMarkerShown: true })
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  // key: 'AIzaSyCOkhZueeUtMT1DjhNtqj0_7T2Urme8Zww',
  render() {

    return (
      <Fragment>
        <MapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          currentLocation={this.state.currentLatLng}
        />
      </Fragment>
    )
  }
}

export default MapView;