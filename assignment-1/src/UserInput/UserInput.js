import React from 'react';
import './UserInput.css';

const userInput = (props)=>{

	return (
		<div className='UserInput'>
			<input type="text" value={props.name} onChange={props.change}/>
		</div>
		);
}

export default userInput;