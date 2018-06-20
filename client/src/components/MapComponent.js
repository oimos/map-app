import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import GurunaviData from './GurunaviMapView'
import loadingImg from '../img/spinner-of-dots.svg'


// let dummyArray = [
//   {lat: 35.6109236, lng: 139.6300704},
//   {lat: 35.6112259, lng: 139.6330738},
//   {lat: 35.6103314, lng: 139.6304962},
//   {lat: 35.6101233, lng: 139.6303701}
// ]



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
  {
  let shopArray = [];
  if(props.storeData){
    const shops = props.storeData.data.response;
    for(let key in shops){
      if(shops.hasOwnProperty(key) && shops[key].hasOwnProperty('photo')){
        shopArray.push(shops[key])
      }
    }
  }
  return(
  props.currentLocation.lat !== 0 ?
  <div>
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.isMarkerShown &&
      // dummyArray.map((marker, index) => {
      //   console.log(marker)
      //   return (
      //     <Marker
      //       position={marker}
      //       title='click to zoonm'
      //       key={index}
      //       />
      //   )
      // })
      shopArray.map((shop, index) => {
        console.log(shop.photo.latitude)
        console.log(shop.photo.longitude)
        return(
          <Marker
            key={`${shop.photo.shop_id}_${index}`}
            position={
              {
                lat: parseFloat(shop.photo.latitude),
                lng: parseFloat(shop.photo.longitude)
              }
            }
            onClick={props.onMarkerClick} />
        )
      })
      // <Marker
      //   position={
      //     {
      //       lat: props.currentLocation.lat,
      //       lng: props.currentLocation.lng
      //     }
      //   }
      //   onClick={props.onMarkerClick} />
    }
  </GoogleMap>
  <GurunaviData latlng={props.currentLocation}/>
  </div>
  :
  <p>Loading...
    <img src={loadingImg}
      alt="Loading"
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
  )}
)

export default MapComponent