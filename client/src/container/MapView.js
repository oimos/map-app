import { connect } from 'react-redux';

import MapView from '../components/MapView';
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

export default connect(mapStateToProps, mapDispatchToProps)(MapView)