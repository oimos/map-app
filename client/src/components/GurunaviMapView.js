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
    // this.props.getGurunaviData();
    console.log(nextProps)
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
            console.log(store.photo.areaname_l)
            // if(store.photo.image_url.url_200){
              if(store.photo.areaname_l){
              return (
                <div>
                  {/* <img src={store.photo.image_url.url_200} /> */}
                  {store.photo.areaname_l}
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