import React, { Component } from 'react'

export default class InverstDetailComponent extends Component { 

  render() {
     const { displayName ,code,groupInfo,interestRateDisplay,extInvestPeriodDisplay,extCurrentPrice,id,extCollectionModeDisplay } = this.props.data
    return (
      <div style={Styles.nav}>

        <div style={Styles.displayName}>{displayName}  {code}</div>
        <div style={Styles.con}>
            <div style={Styles.con1}>
              <div style={Styles.rate}>{interestRateDisplay}</div>
              <div style={Styles.text}>期望年化收益率</div>
            </div>
            <div style={Styles.con1}>  
              <div style={Styles.extInvest}>{extCollectionModeDisplay}</div>
              <div style={Styles.extCurrentPrice}>收益方式</div>
            </div>
        </div>

        <div style={Styles.inverstBtn}>立即投资</div>

      </div>
    )
  }
}


const Styles = {
  nav:{
    margin:'50px 0 65px 0',
    backgroundColor:'#6474D0',
    padding:'1.5rem 1rem'

  },
  Item:{
    // height:70,
    padding:'20px 30px 10px 30px',
    backgroundColor:'#fff',
    margin:'0 0 15px 0',
    display:'flex',
    flexDirection: 'column',
  },
  con: {
    display:'flex',
    marginTop:'1.1rem',
    alignItems:'center',
  },
  con1: {
    flex:1
  },
  displayName: {
    color: '#fff',
    fontSize: '0.8rem',
  },
  groupInfo:{
    color: '#fff',
    backgroundColor: '#91a7ff',
    display: 'inline-table',
    padding:'2px 4px',
    fontSize:'0.5rem',
    marginTop:'0.5rem'
  },
  rate: {
    fontSize: '1.8rem',
    color: '#fff'
  },
  text: {
    color: '#B4BCE8',
    fontSize: '0.8rem',
    marginTop: '0.5rem'
  },
  extInvest: {
    color: '#fff',
    fontSize: '0.8rem',
    marginTop: '0.5rem'
  },
  extCurrentPrice: {
    color: '#B4BCE8',
    fontSize: '0.8rem',
    marginTop: '0.9rem'
  },
  inverstBtn:{
    position: 'fixed',
    bottom:0,
    left:0,
    right:0,
    textAlign:'center',
    padding:15,
    backgroundColor:'#FC7946',
    color:'#fff'
  }

}


