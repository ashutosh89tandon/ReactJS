import React  from 'react';

const charComponent = (props)=>
{
	const style={
			display : 'inline-block',
			margin : '16px',
			border : '1px solid black',
			padding : '16px',
			textAlign : 'center',

		};
	return (
		<div>
		<p style={style} onClick={props.onClick}> {props.char}</p><br/>
		</div>
	);
}

export default charComponent;