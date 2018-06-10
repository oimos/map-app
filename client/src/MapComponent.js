import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import loadingImg from './img/spinner-of-dots.svg'

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOkhZueeUtMT1DjhNtqj0_7T2Urme8Zww&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, position: 'relative' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  props.currentLocation.lat !== 0 ?
  <div>
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }} onClick={props.onMarkerClick} />}
  </GoogleMap>
  </div>
  :
  <p>Loading...
    <img src={loadingImg}
      width="40"
      height="40"
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
      }}
      />
  </p>
)

export default MapComponent