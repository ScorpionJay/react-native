import React, { Component } from 'react'
import Slider from 'react-slick'


export default class SimpleSlider extends Component { 

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:false,
      // adaptiveHeight:true
    };
    return (
      <Slider {...settings}>
        <div><SliderItem url='https://static.lufaxcdn.com/wcm-images/5GbQZmvn0OKbrgQ80IeMqA.png'/></div>
        <div><SliderItem url='https://static.lufaxcdn.com/wcm-images/mtPTXc8HCQIVSdbI-p3Ujw.png'/></div>
        <div><SliderItem url='https://static.lufaxcdn.com/wcm-images/0y44GG-RHYJmEHx6UFqIwQ.png'/></div>
      </Slider>
    )
  }
}


class SliderItem extends Component { 

  render() {
    return (
      <img src={this.props.url} />
    )
  }
}