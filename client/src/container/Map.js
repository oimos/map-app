import { connect } from 'react-redux';

import Map from '../components/Map/Map';
import { getCurrentLocation } from '../action';

const mapStateToProps = (state) => {
  return {
    currentLatLng: state.currentLatLng,
    geolocationEnabled: state.geolocationEnabled,
    storeData: state.storeData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCurrentLocation: () => dispatch(getCurrentLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)