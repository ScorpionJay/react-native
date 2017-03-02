import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  WebView,
  ScrollView,
} from 'react-native';

import ToolBar from '../components/ToolBar'

class Web extends Component {

  render() {
    let url =  this.props.route.params.url
    console.log(url)
    return (
      <View style={styles.container}>
        
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>

        <WebView source={{uri: url}} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Web
