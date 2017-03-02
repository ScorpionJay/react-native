import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { fetchList,fetchListItem } from '../actions/home'



import HomeCarousel from '../components/homeCarousel'
import HomeTip from '../components/homeTip'
import HomeProduct from '../components/homeProduct'

class Home extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(fetchList(1))
  }

  render() {
    const { dispatch,data } = this.props
    return (
      <ScrollView>
         <HomeCarousel style={{height:'200px'}} navigator={this.props.navigator} route={this.props.route}/>
         <HomeTip navigator={this.props.navigator} route={this.props.route}/>
         <HomeProduct navigator={this.props.navigator} route={this.props.route}/>

          <View style={{margin:10}}>
            <Text style={{textAlign:'center',textDecorationLine:'underline',color:'#b28247',fontSize:16,}}>100%适用于质量保障金计划</Text>
          </View>

      </ScrollView>
    )
  }
}

function map(state) {
  return {
    data: state.home.fetchList,
  }
}



export default connect(map)(Home)
