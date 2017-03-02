import React ,{Component} from 'react'


export default class Spin extends Component {


	render() {
		return (
			<div style={ (this.props.spin ? Styles.show : Styles.hidden) }>
				Loading...
			</div>
		);
	}

} 

const Styles = {
	show:{
	    position: 'fixed',
	    display:'flex',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    justifyContent:'center',
		alignItems:'center',
	    color: 'rgb(51, 51, 51)',
	    backgroundColor: '#b1abab',
	    zIndex: 2,
	    opacity:'0.8'
	},
	hidden:{
		display:'none',
	},
}