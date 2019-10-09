import React from 'react';
import classes from './Modal.css';
import Auxillary from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends React.Component {

	shouldComponentUpdate(nextProps,nextState)
	{
		return nextProps.show !== this.props.show;
	}

	componentWillUpdate()
	{
		console.log('Modal will update');
	}

	render(){
		return (
			<Auxillary>
			<Backdrop show = {this.props.show} onClickAction={this.props.modalClosed} />
			<div className={classes.Modal} 
			style ={{
				transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity :  this.props.show ? '1' : '0'
			}}>
				{this.props.children}
			</div>
			</Auxillary>
		);
	}
} 

export default Modal;

