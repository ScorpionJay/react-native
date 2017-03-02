import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Item from './inverstListItem'

export default class InverstList extends Component { 

  render() {
      return (
        <ScrollView >
          {
              this.props.data.map((item, index) =>
                    <Item data={item}  key={index}/>
                    )
          }
        </ScrollView>
      )
     
    
  }
}






