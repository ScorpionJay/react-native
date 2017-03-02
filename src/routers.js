import React , {Component } from 'react'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'
import { connect } from 'react-redux'

import Me from './containers/me'

import storage  from './storage'
import Spin from './components/Spin'
import App from './app'

const Routes = {
	path: '/',
	component: App,
	indexRoute :{onEnter: (nextState, replace) => replace('/home')},
	childRoutes: [
		{ path: 'home',
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/home').default)
			})
		   }
		},
		{ path: 'inverst', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/inverst').default)
			})
		   }
		},
		{ path: 'inverstDetail/:id', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/inverstDetail').default)
			})
		   }
		},
		{ path: 'me', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/me').default)
			})
		  },
		  onEnter: function({ params }, replace){
				// 是否登录 storage

				if( !storage.get('token') )
					replace(`login`)
			}
		},
		{ path: 'setting', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/setting').default)
			})
		  },
		  onEnter: function({ params }, replace){

				// 是否登录
				if(false)
					replace(`home`)
			}
		},
		{ path: 'login', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/login').default)
			})
		   }
		},
		{ path: 'more', 
		  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/more').default)
			})
		   }
		}
		// { path: 'todoItem', component: TodoItem},
		// { path: 'find', component: Find},
		// { path: 'me', component: Me},
		// { path: 'login', component: Login},
		// { path: 'itemDetail/:id', component: ItemDetail},
		// {
		// 	path: 'itemDetail',
		// 	component: ItemDetail,
		// 	childRoutes : [{
		// 		path: 'itemDetal/:id',
		// 		onEnter: ({ params }, replace) => replace(`/itemDetail/${params.id}`)
		// 	}]
		// },
		// {
		// 	component: Home,
		// 	childRoutes: [{
		// 		path: 'itemDetail/:id',component:ItemDetail
		// 	}]
		// }
	]
}

export default Routes