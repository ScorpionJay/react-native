import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './home'
import Inverst from './inverst'
import Me from './me'
import Config from '../config'


export default class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:Config.initTab
    }
  }

  render() {
    return (
      <TabNavigator  tabBarStyle={{ height: 60, }}>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页" titleStyle={{color:"#aaa",fontSize:15}} selectedTitleStyle={{color:"#f60"}}
          renderIcon={() => <Image style={styles.icon} source={require('../images/icon_1.png')} resizeMode={'contain'}/>  }
          renderSelectedIcon={() =>  <Image  style={styles.icon} source={require('../images/icon_2.png')} resizeMode={'contain'}/>}
          onPress={() => {this.setState({ selectedTab: 'home' });this.props.route.title='首页'}}>
          <Home navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          title="投资" titleStyle={{color:"#aaa",fontSize:15}} selectedTitleStyle={{color:"#f60"}}
          renderIcon={() => <Image style={styles.icon} source={require('../images/icon_3.png')} resizeMode={'contain'}/>}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/icon_4.png')} resizeMode={'contain'}/> }
          onPress={() => {this.setState({ selectedTab: 'find' });this.props.route.title='投资'}}>
          <Inverst navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'me'}
          title="我的" titleStyle={{color:"#aaa",fontSize:15}} selectedTitleStyle={{color:"#f60"}}
          renderIcon={() => <Image style={styles.icon} source={require('../images/icon_5.png')} resizeMode={'contain'}/>}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/icon_6.png')} resizeMode={'contain'}/>}
          onPress={() => {this.setState({ selectedTab: 'me' });this.props.route.title='我'}}>
          <Me navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>
        
        
      
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width:30,
    height:30
  }
})