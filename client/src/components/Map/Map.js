import React, { Component, Fragment } from 'react'
import MapInfo from '../../container/MapInfo'

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

  handleMarkerClick = (i) => {
    console.log(i)
    console.log(this.props.storeData.data.response[i].photo.shop_name)
    console.log(this.props.storeData.data.response[i].photo.image_url.url_200)
    // this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <Fragment>
        <MapInfo
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          currentLocation={this.state.currentLatLng}
        />
      </Fragment>
    )
  }
}
// key: 'AIzaSyCOkhZueeUtMT1DjhNtqj0_7T2Urme8Zww',
export default MapView;