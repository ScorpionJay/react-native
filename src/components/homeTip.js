import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class HomeTip extends Component { 

  _handle(u,t){
    this.props.navigator.push({
       title:t,
       id:'web',
       params: {
        url: u
      }
    })
  }

  render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this._handle.bind(this,'http://test.wap.xingfuqianzhuang.com/html/index_safe.html?source=android','质量保障金计划')}>
            <View style={styles.item}>
              <Image source={require('../images/1.png')} style={styles.img} resizeMode={'contain'}/>
              <Text style={styles.text}>安全可靠</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handle.bind(this,'http://test.wap.xingfuqianzhuang.com/html/index_integrity.html?source=android','诚信经营')}>
            <View  style={styles.item}>
              <Image source={require('../images/2.png')} style={styles.img} resizeMode={'contain'}/>
              <Text style={styles.text}>诚信经营</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handle.bind(this,'http://test.wap.xingfuqianzhuang.com/html/index_robust.html?source=android','稳健运营')}>
            <View  style={styles.item}>
              <Image source={require('../images/3.png')} style={styles.img} resizeMode={'contain'}/>
              <Text style={styles.text}>稳健运营</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handle.bind(this,'http://test.wap.xingfuqianzhuang.com/html/index_quickpayment.html?source=android','快捷支付')}>
            <View  style={styles.item}>
              <Image source={require('../images/4.png')} style={styles.img} resizeMode={'contain'}/>
              <Text style={styles.text}>快捷支付</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-around',
    padding:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderBottomColor:'#eee',
    borderBottomWidth:1
  },
  item: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
  img: {
    width:60/1.5,
    height:66/1.5
  },
  text:{
    marginTop:8,
    color:'#333',
    fontSize:13
  }
})




