import React, { Component } from 'react'
import axios from 'axios'
import isEmpty from '../../util/is-empty'
import './LocationSlide.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

class LocationSlide extends Component {
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
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        {
          this.state.storeInfo.map((store, index) => {
            console.log(store.hasOwnProperty('photo'))
            if(store.hasOwnProperty('photo')){
              return (
                <div key={`${store.photo.shop_id}_${index}`}>
                  <div className="carouselItem">
                    <figure className="carouselItem__photo">
                      <img src={store.photo.image_url.url_200} />
                    </figure>
                    <div className="carouselItem__text">

                      <div>areaname_l: {store.photo.areaname_l && store.photo.areaname_l}</div>
                      <div>areaname_m: {store.photo.areaname_m && store.photo.areaname_m}</div>
                      <div>areaname_s: {store.photo.areaname_s && store.photo.areaname_s}</div>
                      <div>category: {store.photo.category && store.photo.category}</div>
                      <div>update_date: {store.photo.update_date && store.photo.update_date}</div>
                      <div>photo_genre_name: {store.photo.photo_genre_name && store.photo.photo_genre_name}</div>
                      <div>shop_name: {store.photo.shop_name && store.photo.shop_name}</div>
                      <div>distance: {store.photo.distance && store.photo.distance}m</div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
        </Slider>
        {
          // this.state.storeInfo.map((store, index) => {
          //   console.log(store.hasOwnProperty('photo'))
          //   if(store.hasOwnProperty('photo')){
          //     return (
          //       <div key={`${store.photo.shop_id}_${index}`}>
          //         <img src={store.photo.image_url.url_200} />
          //       </div>
          //     )
          //   }
          // })
        }
      </div>
    )
  }
}

export default LocationSlide