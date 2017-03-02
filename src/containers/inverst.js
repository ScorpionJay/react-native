import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'
import { inverstListApi } from '../actions/inverst'

import InverstList from '../components/inverstList'

import ToolBar from '../components/ToolBar'

class Inverst extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
     const { dispatch, data } = this.props
    dispatch(inverstListApi(1))
  }

  // componentDidMount(){
  //   const { dispatch, data } = this.props
  //   dispatch(inverstListApi(1))
  // }

  render() {
    const { dispatch,spin,inversList } = this.props
    return (
      <View>
          <ToolBar navigator={this.props.navigator} route={this.props.route}/>
          <InverstList data={inversList}/>
         
      </View>
    )
  }
}

function map(state) {
  return {
    inversList: state.inverst.inverstList,
  }
}

// 样式


export default connect(map)(Inverst)
