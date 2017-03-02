import React, { Component } from 'react'

export default class Tab extends Component { 

  constructor(props) {
    super(props);
    this.state = {};
  }


  back(){
    if(this.props.tab1){
      history.go(-1)
    }
    
  }

  tab3Fn(){
    if( this.props.tab3Fn )
       this.props.tab3Fn()
  }


  render() {



    return (
      <div style={Styles.nav}>
        <a style={Styles.tab1} onClick={ this.back.bind(this) }>{this.props.tab1 ? <img style={Styles.back} src={require('../images/arrow.png')} /> :''}</a>
        <div style={Styles.tab2}>{ this.props.title }</div>
        <div style={Styles.tab3} onClick={ this.tab3Fn.bind(this)}>{this.props.tab3}</div>
      </div>
    )
  }
}

const Styles = {
  nav:{
    position:'fixed',
    top: 0,
    left:0,
    right:0,
    display:'flex',
    height:50,
    justifyContent:'space-between',
    borderBottom:'1px solid #e1e1e1',
    fontSize: '20px',
    color: '#3333',
    backgroundColor: '#fff'
  },
  tab1:{
    flex:1,
    lineHeight:'50px',
    textDecoration: 'none',
    paddingLeft:10,
    fontSize: '18px',
  },
  tab2:{
    flex:1,
    textAlign:'center',
    lineHeight:'50px',
    textDecoration: 'none',
    color:'#000'
  },
  tab3:{
    flex:1,
    textAlign:'right',
    lineHeight:'38px',
    textDecoration: 'none',
    paddingRight:10
  },
  back:{
    width:45,
    marginLeft:-15
  }
}


