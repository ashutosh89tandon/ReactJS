import React  from 'react';

const validationComponent = (props)=>
{
	const length=props.textLength;
	let message="Length is fine!!!";
	if(length <=2)
		message="Length too short !!!";
	else if(length > 10)
		message="Length too long !!!";
	return (
		<p> {message}</p>
		);
}

export default validationComponent;