import React ,  {useEffect} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import Auxillary from '../..//hoc/Auxillary';
import AuthContext from '../../context/Context';

 class Person  extends React.Component
{
	 el =null;
	 static contextType=AuthContext;
	 constructor(props)
	 {
	 	super(props);
	 	this.el=React.createRef();
	 }
	componentDidMount(){
		//this.el.focus();
		this.el.current.focus();

	}
	// Only for function based component
	/*useEffect(()=>{
		console.log('[Person.js] useEffect');
		const timer=setTimeout(()=>{
			alert('Its Time out');
		},1000);

		return ()=>{
			clearTimeout(timer);
			console.log('[Person.js] Clean up');
		};
	},[]);*/
	render(){
		console.log("Render" + this.context.authenticated);
	return (
		<Auxillary>
		<AuthContext.Consumer>
        { 
        	context =>
        		context.authenticated ? 
        		 <p>Authenticated!!</p> : <p>Please Login!!</p>
    	}
    	</AuthContext.Consumer>
		<h2 onClick={this.props.click} onDoubleClick={this.props.doubleClick}>I am {this.props.name} and my age is {this.props.age} !!!</h2>
		<p>{this.props.children}</p>
		<input type="text" onChange={this.props.change} 
		//ref={(e) => {this.el=e;}}/>
		ref={this.el}/>
		</Auxillary>
		
		);
}
	
};

Person.propTypes = {
	click : PropTypes.func,
	doubleClick : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	change : PropTypes.func


};

export default Person;