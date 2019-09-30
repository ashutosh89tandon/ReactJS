
import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
		},
		purchasable : false,
		purchasing : false,

	}

	updatePurchasingStatus = ()=>{

		this.setState({purchasing : true});
	};

	removePurchasingStatus = ()=>{

		this.setState({purchasing : false});
	};

	updatePurchasableStatus(ingredients)
	{
		const sum = Object.keys(ingredients).map(ingKey=>{
			return ingredients[ingKey];
		}).reduce((sum,el)=>{
			return sum+el;
		},0);

		this.setState({
			purchasable : sum>0
		})
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
		this.updatePurchasableStatus(updatedIngredients);
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

		this.updatePurchasableStatus(updatedIngredients);
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
			<Modal show = {this.state.purchasing} modalClosed={this.removePurchasingStatus} ><OrderSummary ingredients={this.state.ingredients}
			 purchaseCanceled={this.removePurchasingStatus} price={this.state.totalPrice}
			 /></Modal>
			<Burger key="123" ingredients = { this.state.ingredients}/>
			<BuildControls key="1234" price={this.state.totalPrice} 
			 added={this.ingredientsAddHandler} 
			 removed={this.ingredientsRemoveHandler}
			 disableInfo = {objDisableInfo} purchasable={this.state.purchasable} 
			 ordered = {this.updatePurchasingStatus}/>
		</Auxillary>);
	}
}

export default BurgerBuilder