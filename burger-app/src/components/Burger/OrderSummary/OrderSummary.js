import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{

	const transformedIngredients= Object.keys(props.ingredients).map(ingKey =>{
			return <li>{ingKey} : {props.ingredients[ingKey]}</li>
	});
	return (
			<div> 
				<h3>Order Summary</h3>
				<p>Your delicious burger is ready with following ingredients:</p>
				<ul>
				 {transformedIngredients}
				</ul>
				<p><strong> Total price : { props.price}</strong></p>
				<p>Continue to checkout?</p>
				<Button clicked={props.purchaseCanceled} type="Danger" >CANCEL</Button>
				<Button clicked={props.purchaseContinued} type="Success">ORDER</Button>
			</div>
		);
};

export default orderSummary;