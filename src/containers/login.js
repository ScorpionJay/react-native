import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginFetch } from '../actions/login'

import Tab from '../components/tab'


class Login extends Component {

  login(e){
    const { dispatch } = this.props
    dispatch(loginFetch(this.refs.username.value,this.refs.password.value,function(){
      location.replace('#me')
    }))
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div>

          <Tab tab1='返回' title='登录'/>
      
          <div style={{marginTop:50,}}>
            <div style={Styles.logo}>
              <img style={Styles.logoImg} src={require('../images/logo.png')} />
            </div>
            <div style={{display:'flex',flexDirection: 'column'}}>
              <input placeholder='请输入您的手机号' ref='username' style={Styles.ipt}/>
              <input type='password' placeholder='请输入您的登录密码' ref='password' style={Styles.ipt}/>
            </div>
            <div style={Styles.btnD}><button style={Styles.btn} onClick= {(e) => this.login(e)}>立即登录</button></div>
          </div>
      
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.fetchList,
    // spin: state.spin.spin
  }
}

// 样式
const Styles = {
  content:{
    marginTop:50,
  },
  logo:{
    textAlign:'center',
    marginTop:'100px',
    marginBottom:'50px'
  },
  logoImg:{
    height:'80px'
  },
  ipt: {
    display:'flex',
    flex:1,
    height:'30px',
    border:'1px solid #333',
    padding:'5PX 5px',
    fontSize:'13px',
    marginTop:'2px'
  },
  btnD: {
    padding:8
  },
  btn: {
    width:'100%',
    borderRadius:'25px',
    lineHeight:'45px',
    height:'45px',
    backgroundColor:'#ff6600',
    color:'#fff',
    fontSize:'16px',
    border:0,
  }

}

export default connect(map)(Login)
