import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary';

const sideDrawer=(props) =>{
	 
	let cssClasses=[classes.SideDrawer,classes.Close];
	 if(props.showBackdrop)
	 {
	 	cssClasses=[classes.SideDrawer,classes.Open];
	 }
	return (
		<Auxillary>
			<Backdrop onClickAction={props.closeBackdrop} show={props.showBackdrop}/>
			<div className={cssClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo/>
				</div>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Auxillary>
		);
}

export default sideDrawer;