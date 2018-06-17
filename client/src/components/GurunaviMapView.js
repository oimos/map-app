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
  componentWillMount = () => {
    // this.props.getGurunaviData();
    let storeData = this.props.storeData;
    let storeObj = {};
    let storeTmp = [];
    console.log(storeData)
    console.log(!isEmpty(storeData))
    if(!isEmpty(storeData)){
      storeObj = storeData.data.response;
      // for(let key in storeObj){
      //   if(storeObj.hasOwnProperty(key)){
      //     storeTmp.push(storeObj[key])
      //   }
      // }

      console.log(storeObj)
      // this.setState({
      //   ...this,state,
      //   storeInfo: storeTmp
      // })
    }
  }
  render() {
    return (
      <div>
        {

        }
      </div>
    )
  }
}

export default GurunaviData