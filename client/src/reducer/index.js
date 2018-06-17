import {
  PASS_CURRENT_LOCATION,
  ERROR_CURRENT_LOCATION,
  GET_GURUNAVI_DATA,
} from '../type'

const initialState = {
  currentLatLng: {
    lat: 0,
    lng: 0
  },
  geolocationEnabled: false,
  storeData: null
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case PASS_CURRENT_LOCATION:
      console.log(state)
      let updatedVal = {
        geolocationEnabled: true,
        currentLatLng: action.payload
      }
      return {
        ...state,
        ...updatedVal
      }
    case ERROR_CURRENT_LOCATION:
      return {
        ...state,
        geolocationEnabled: false
      }
    case GET_GURUNAVI_DATA:
      return {
        ...state,
        storeData: action.payload
      }
    default:
      return state
  }
}

export default reducer;