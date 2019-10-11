
import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios';
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';

class BurgerBuilder extends React.Component
{
	state ={
		ingredients : null,
		totalPrice : 14,
		ingredientsPrice : {
			Cheese : 2,
			Salad : 1,
			Meat : 4,
			Bacon : 3
		},
		purchasable : false,
		purchasing : false,
		loading : false,
		errorObj : null
	}

	componentWillMount()
	{
		axios.get('https://my-burger-app-32de9.firebaseio.com/ingredients.json').then(res=>{
			this.setState({ingredients: res.data});
			this.setState({errorObj: null});
		}).catch(error=> {
			this.setState({errorObj : error});
		});

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

	purchaseContinueHandler = ()=>{
		this.setState({loading : true});
		const order={
			ingredients : this.state.ingredients,
			totalPrice : this.state.totalPrice,
			customer : {
				name : 'Ashutosh' ,
				address : {
					city : 'test',
					area : 'test',
					zip : '123456'
				}
			}

		}
		axios.post('/orders.json',order).then(res=> {
			this.setState({loading : false ,purchasing :  false});
		}).catch(err => {
			this.setState({loading : false ,purchasing :  false});
		});
	};

	render()
	{
		const objDisableInfo ={...this.state.ingredients};

		for (let key in objDisableInfo)
		{
			objDisableInfo[key] = objDisableInfo[key] <=0;
		}

		let orderSummary=<Spinner/>;
		let burger=<Spinner/>;
		if(this.state.ingredients)
		{
			orderSummary=<OrderSummary ingredients={this.state.ingredients}
			 purchaseCanceled={this.removePurchasingStatus} price={this.state.totalPrice} continueClicked={this.purchaseContinueHandler}
			 />;
			 burger=(<Auxillary><Burger key="123" ingredients = { this.state.ingredients}/>
			<BuildControls key="1234" price={this.state.totalPrice} 
			 added={this.ingredientsAddHandler} 
			 removed={this.ingredientsRemoveHandler}
			 disableInfo = {objDisableInfo} purchasable={this.state.purchasable} 
			 ordered = {this.updatePurchasingStatus}/></Auxillary>);

		}
		if(this.state.loading)
		{
			orderSummary=<Spinner/>
		}	
		return (
		!this.state.errorObj ? 
		<Auxillary>
			<Modal show = {this.state.purchasing} modalClosed={this.removePurchasingStatus} >
			{orderSummary}</Modal>
			{burger}
		</Auxillary> : <div style={{textAlign : 'center'}}><b>Error while loading page !!! </b> <br/> this.errorObj.message</div> );
	}
}

export default  WithErrorHandler(BurgerBuilder,axios);