import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'
import { fetchList,fetchListItem } from '../actions/home'

import MeComponent from '../components/me'

class Me extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(fetchList(1))
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <View>
          <MeComponent/>
      </View>
    )
  }
}

function map(state) {
  return {
    data: state.home.fetchList,
    login: state.login.login,
  }
}



export default connect(map)(Me)
