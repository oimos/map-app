import { connect } from 'react-redux';

import LocationSlide from '../components/LocationSlide/LocationSlide';
// import { getGurunaviData } from '../action';

const mapStateToProps = (state) => {
  return {
    currentLatLng: state.currentLatLng,
    geolocationEnabled: state.geolocationEnabled,
    storeData: state.storeData
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getGurunaviData: () => dispatch(getGurunaviData())
//   }
// }

export default connect(mapStateToProps)(LocationSlide)