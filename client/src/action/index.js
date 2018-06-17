import {
  PASS_CURRENT_LOCATION,
  ERROR_CURRENT_LOCATION,
  GET_GURUNAVI_DATA
} from '../type'
import axios from 'axios'

export const passCurrentLocation = (latlng) => {
  return {
    type: PASS_CURRENT_LOCATION,
    payload: latlng
  }
}

export const errorCurrentLocation = () => {
  return {
    type: ERROR_CURRENT_LOCATION
  }
}

export const getGurunaviData = (data) => {
  return {
    type: GET_GURUNAVI_DATA,
    payload: data
  }
}

export const getCurrentLocation = () => dispatch => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( position => {
      let latlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      return new Promise((resolve, reject) => {
        dispatch(passCurrentLocation(latlng))
        resolve(latlng);
      })
      .then((res) => {
        axios(`http://localhost:5000/api/gurunavi/${res.lat}/${res.lng}`)
          .then((res) => {
            dispatch(getGurunaviData(res))
          })
          .catch(err => {
            console.log(err)}
          )
      })
      .catch((err) => console.log(err))
    }, () => {
      console.log('denied!')
      dispatch(errorCurrentLocation())
    })
  } else {
    dispatch(errorCurrentLocation())
  }
}


// }}
  // axios(`http://localhost:5000/api/gurunavi/${lat}/${lng}`)
  //   .then((res) => {
  //     console.log(res)
  //   })
  // }

      //   this.setState(
      //       prevState => ({
      //       ...this.state,
      //         gurunaviData: res
      //       })
      //     )
      //     resolve();
      //   })
      // })