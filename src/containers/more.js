import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutFetch } from '../actions/login'

import Slider from '../components/slider'
import Tab from '../components/tab'
import Nav from '../components/nav'
import MeComponent from '../components/me'
// import List from '../components/Home/List'

// import Bar from '../components/common/Bar'
// import Tab from '../components/common/Tab'
// import Spin from '../components/common/Spin'

class More extends Component {

  // componentDidMount(){
  //   const { dispatch, data } = this.props
  //   dispatch(fetchList(1))
  // }

  logout(){
    const { dispatch } = this.props
    dispatch(logoutFetch(function(){
      location.replace('#home')
    }))
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div>
          <Tab tab1='返回' title='更多' />
          <div style={{marginTop:50}}>
            <div  style={{ height:15 }}></div>
            <div style={Styles.line}>关于我们</div>
            <div style={Styles.line}>新手指引</div>
            <div style={Styles.line}>帮助中心</div>
            <div style={Styles.line}>意见反馈</div>
            <div style={Styles.line}>联系我们</div>
            <div style={Styles.line}>官方微博</div>
            <div style={Styles.line}>官方微信</div>
          </div>
         
      </div>
    )
  }
}

function map(state) {
  return {
    // data: state.home.fetchList,
    // spin: state.spin.spin
  }
}

// 样式
const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  },
  line: {
    padding:'10px',
    marginBottom:'10px',
    backgroundColor:'#eee',
    color:'#787878',
  },
  btn:{
    textAlign:'center',
    backgroundColor:'#ff6600',
    lineHeight:'45px',
    margin:'10px',
    borderRadius:'25px',
    color:'#fff',
    fontSize:'16px',
  }
}

export default connect(map)(More)



// {
//             data.map((item, index) =>
//                   <div {...item} key={index}>{item.name}</div>)
//           }