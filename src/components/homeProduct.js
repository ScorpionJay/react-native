import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

export default class HomeProduct extends Component { 

  render() {
      return (
        <View style={styles.container}>
            <View style={styles.name}>
              <Text style={styles.text}>福盈A</Text>
            </View>
            <View  style={styles.item}>
              <Text style={styles.expect}>预期年化收益</Text>
            </View>
            <View  style={styles.item}>
              <Text style={styles.rate}>6<Text style={styles.rate2}>%</Text></Text>
            </View>
            <View  style={styles.item}>
              <Text style={styles.term}>投资期限1个月</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'center',margin:10}}>
              <View style={[styles.item,styles.circle]}>
                <Text style={styles.buy}>购买</Text>
              </View>
            </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    margin:8,
    borderRadius:10,
    flexDirection: 'column',
    padding:2,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderBottomColor:'#eee',
    borderBottomWidth:1
  },
  name:{
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    // borderStyle:'dashed'
    paddingBottom:8,
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
    margin:4,
    color:'#333',
    fontSize:19,
    textAlign:'center'
  },
  expect: {
    marginTop:10,
    color:'#787878',
    fontSize:14,
    textAlign:'center'
  },
  rate:{
    color:'#ff6601',
    fontSize:57,
    textAlign:'center'
  },
  rate2:{
    fontSize:37,
  },
  term: {
    fontSize:14,
  },
  circle: {
    height:90,
    width:90,
    borderRadius:80,
    backgroundColor:'#ff6601'
  },
  buy:{
    fontSize:25,
    color:'#fff'
  }
})




