import React, { Component } from 'react'
import axios from 'axios'
import isEmpty from '../util/is-empty'

class GurunaviData extends Component {
  constructor(props){
    super(props)
    this.state = {
      storeInfo: []
    }
  }
  componentWillReceiveProps = (nextProps) => {
    let storeData = nextProps.storeData;
    let storeObj = {};
    let storeTmp = [];
    console.log(storeData)
    console.log(!isEmpty(storeData))
    if(!isEmpty(storeData)){
      storeObj = storeData.data.response;
      for(let key in storeObj){
        if(storeObj.hasOwnProperty(key)){
          storeTmp.push(storeObj[key])
        }
      }
      console.log(storeTmp)
      this.setState({
        ...this.state,
        storeInfo: storeTmp
      })
    }
  }
  render() {
    return (
      <div>
        {
          this.state.storeInfo.map((store, index) => {
            console.log(store.hasOwnProperty('photo'))
            if(store.hasOwnProperty('photo')){
              return (
                <div key={`${store.photo.shop_id}_${index}`}>
                  <img src={store.photo.image_url.url_200} />
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default GurunaviData