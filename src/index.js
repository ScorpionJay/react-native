import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './stores';

import App from './app'
// 禁掉黄色警告
console.disableYellowBox = true;
export default class Index extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	store : configureStore()
	  };
	}

	render(){
		return (
		  <Provider store={this.state.store}>
		    <App />
		  </Provider>
		)
	}
}


