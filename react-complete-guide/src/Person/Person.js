import React from 'react';
import './Person.css'

const person= (props)=>
{
	return (
		<div className='Person'>
		<h2 onClick={props.click}>I am {props.name} and my age is {props.age} !!!</h2>
		<p>{props.children}</p>
		<input type="text" onChange={props.change}/>
		</div>);
};

export default person;