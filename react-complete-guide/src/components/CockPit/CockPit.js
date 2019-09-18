import React, {useRef,useEffect,useContext} from 'react';
import classes from './CockPit.css';
import AuthContext from '../context/Context';

const cockPit= (props)=>{

	const auth=useContext(AuthContext);
	const ref1 = useRef(null);
	console.log("auth : "+auth.authenticated);
	useEffect(()=>{
		//ref1.current.click();
	},[]);

	const style={
			backgroundColor : 'green',
			color : "white",
			font : 'inherit',
			border : '1px solid blue',
			padding : '8px',
			cursor : 'pointer',

		};
	if(props.show)
	{
		style.backgroundColor="red";
	}
	const cockPitStyle=[];
	if(props.persons.length ==1)
	{
		cockPitStyle.push(classes.bold);
		cockPitStyle.push(classes.red);
	}
	return (
		<div>
       <h1 className={cockPitStyle.join(' ')}>Hi, I am here!!!</h1>
       <button style={style} 
       ref = {ref1} 
       onClick={props.callEvent.bind(this,'Max')} key="100000">Hit me</button><br/>
       <button style={style} onClick={props.showCallEvent} key="2">Hit me to Hide or Show!</button>
       <br/>
       <AuthContext.Consumer>
        { 
        	context => <button style = {style} onClick={context.login} key="2">Login</button>
    	}
       </AuthContext.Consumer>
       </div>
	);
}

//export default React.memo(CockPit); to optimise functional components that may not need to update with every change
export default cockPit;