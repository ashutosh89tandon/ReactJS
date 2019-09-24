import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
		{ label : 'Cheese', type : 'Cheese'},
		{label :'Salad', type :'Salad'},
		{label :'Meat', type :'Meat'},
		{label :'Bacon', type :'Bacon'},
];
const buildControls = (props)=>
{
	return (
		<div className={classes.BuildControls}> 
		<div>Total price : Rs. {props.price}</div>
			{controls.map( v => {
				return <BuildControl label = {v.label} type ={v.type} ingAdded={() => {props.added(v.type)}} 
				ingRemoved={() => {props.removed(v.type)}}  disableInfo= {props.disableInfo[v.type]} />;
			})}
			<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered} >ORDER NOW</button>
		</div>
		);
}

export default buildControls;