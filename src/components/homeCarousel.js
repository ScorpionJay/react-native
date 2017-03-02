import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight
} from 'react-native';


import Carousel from 'react-native-looped-carousel'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var carouselTest = React.createClass({
  getInitialState: function() {
    return {
      size: {width: width, height: height/6}
    };
  },
  _onLayoutDidChange: function(e) {
    var layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  },

  _handle:function(u,t){
    this.props.navigator.push({
       title:t,
       id:'web',
       params: {
        url: u
      }
    })
  },

  render: function() {
    return (
      <View   onLayout={this._onLayoutDidChange} >
        <Carousel delay={9000} style={this.state.size} bullets={true} >
            <TouchableHighlight onPress={this._handle.bind(this,'http://scorpionjay.github.io/ONE','One')} >
              <Image source={{uri: 'https://static.lufaxcdn.com/wcm-images/5GbQZmvn0OKbrgQ80IeMqA.png'}} style={this.state.size} />
            </TouchableHighlight>

            <TouchableHighlight onPress={ this._handle.bind(this,'http://scorpionjay.github.io/ONE/demo.html','demo')} >
              <Image source={{uri: 'https://static.lufaxcdn.com/wcm-images/mtPTXc8HCQIVSdbI-p3Ujw.png'}} style={this.state.size} />
            </TouchableHighlight>

            <TouchableHighlight onPress={ this._handle.bind(this,'http://scorpionjay.github.io/','github')} >
              <Image source={{uri: 'https://static.lufaxcdn.com/wcm-images/0y44GG-RHYJmEHx6UFqIwQ.png'}} style={this.state.size} />
            </TouchableHighlight>
        </Carousel>
      </View>
    );
  }
});

export default carouselTest