
import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends React.Component
{
	state ={
		ingredients : {
			Cheese : 0,
			Salad : 0,
			Meat : 0,
			Bacon : 0
		},
		totalPrice : 14,
		ingredientsPrice : {
			Cheese : 2,
			Salad : 1,
			Meat : 4,
			Bacon : 3
		}
	}

	ingredientsAddHandler= (type)=>{
		const oldCount= this.state.ingredients[type];
		console.log("remove key pressed "+ type);
		const updatedIngredients ={...this.state.ingredients};
		updatedIngredients[type] = oldCount+1;
		const newTotalPrice= this.state.totalPrice + (this.state.ingredientsPrice[type]);
		this.setState({
			ingredients :updatedIngredients,
			totalPrice : newTotalPrice});
	}

	ingredientsRemoveHandler= (type)=>{
		console.log("remove key pressed "+ type);
		const oldCount= this.state.ingredients[type];
		if(oldCount===0)
		{
			return;
		}
		const updatedIngredients ={...this.state.ingredients};
		updatedIngredients[type] = oldCount-1;
		const newTotalPrice= this.state.totalPrice - (this.state.ingredientsPrice[type]);
		this.setState({
			ingredients : updatedIngredients,
			totalPrice : newTotalPrice});
	}

	render()
	{
		const objDisableInfo ={...this.state.ingredients};

		for (let key in objDisableInfo)
		{
			objDisableInfo[key] = objDisableInfo[key] <=0;
		}

		return (
		<Auxillary>
			<Burger key="123" ingredients = { this.state.ingredients}/>
			<BuildControls key="1234" price={this.state.totalPrice} 
			 added={this.ingredientsAddHandler} 
			 removed={this.ingredientsRemoveHandler}
			 disableInfo = {objDisableInfo} />
		</Auxillary>);
	}
}

export default BurgerBuilder