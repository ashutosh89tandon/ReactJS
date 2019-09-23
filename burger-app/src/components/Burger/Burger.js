import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger =(props)=>{

	return (
			<div className={classes.Burger}>
				<BurgerIngredient type="BreadTop" />
				<BurgerIngredient type="Cheese" />
				<BurgerIngredient type="Salad" />
				<BurgerIngredient type="Meat" />
				<BurgerIngredient type="Bacon" />
				<BurgerIngredient type="BreadBottom" />
			</div>
		);
};

export default burger;