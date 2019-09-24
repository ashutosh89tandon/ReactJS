import React from 'react';

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
				<p>Continue to checkout?</p>
			</div>
		);
};

export default orderSummary;