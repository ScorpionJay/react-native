import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class Item extends Component { 

  render() {
    const { displayName ,groupInfo,interestRateDisplay,extInvestPeriodDisplay,extCurrentPrice,id } = this.props.data
    return (
      <View>
        <Text >{displayName}</Text>
        <Text >{groupInfo}</Text>
        <View >
          <View >
            <Text >{interestRateDisplay}</Text>
            <Text >期望年化收益率</Text>
          </View>
          <View >  
            <Text >{extInvestPeriodDisplay}</Text>
            <Text >{extCurrentPrice}元起</Text>
          </View>
        </View>
      </View>
    )
  }
}




