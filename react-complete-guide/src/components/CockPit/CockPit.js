import React from 'react';
import classes from './CockPit.css';
import Radium from 'radium';

const CockPit= (props)=>{

	const style={
			backgroundColor : 'green',
			color : "white",
			font : 'inherit',
			border : '1px solid blue',
			padding : '8px',
			cursor : 'pointer',
			':hover':{
				backgroundColor: 'lightgreen',
				color : 'black'
			}

		};
	if(props.show)
	{
		style.backgroundColor="red";
     	 style[':hover']={
				backgroundColor: 'salmon',
				color : 'black'
		}
	}
	const cockPitStyle=[];
	if(props.persons.length ==1)
	{
		cockPitStyle.push(classes.bold);
		cockPitStyle.push(classes.red);
	}
	return (
		<div>
       <h1 className={cockPitStyle.join(' ')}>Hi, I am here!!!</h1>
       <button style={style} onClick={props.callEvent.bind(this,'Max')} key="1">Hit me</button><br/>
       <button style={style} onClick={props.showCallEvent} key="2">Hit me to Hide or Show!</button>
       </div>
	);
}

export default Radium(CockPit);