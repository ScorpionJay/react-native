import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { inverstItemApi } from '../actions/inverst'

import Slider from '../components/slider'
import Tab from '../components/tab'
import Nav from '../components/nav'
import InverstDetailComponent from '../components/inverstDetailComponent'

class InverstDetail extends Component {


  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id
    };
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(inverstItemApi(this.props.params.id))
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div>
          <Tab  tab1='返回' title='项目详情'/>
          <InverstDetailComponent data={data} />
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.inverst.inverstItem,
  }
}

// 样式
const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(InverstDetail)
