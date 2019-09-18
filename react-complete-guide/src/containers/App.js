import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/CockPit/CockPit';
import Radium from 'radium';
import Auxillary from '../components/hoc/Auxillary';
import AuthContext from '../components/context/Context';

class App extends Component{

	constructor(props)
	{
		super(props);
		console.log('Constructor');
	}
	state ={
		persons : [
		{
			id: 1,
			name : "Ashu",
			age : 1
		}
		],
		show : true,
		isAuthenticated :false
		
	};

	static getDerivedStateFromProps(props, state)
	{
		console.log('getDerivedStateFromProps');
		return state;
	}

	componentDidMount()
	{
		console.log('componentDidMount');
	}

	componentWillMount()
	{
		console.log('componentWillMount');
	}


 callEvent=(newName)=>{
		this.setState({
		persons : [
		{
			name : newName,
			age : 29
		}
		]

		
	});
	}

	loginHandler = () =>{
		console.log('Login button clicked!!');

		const auth = !this.state.isAuthenticated;
		console.log(auth);
		this.setState({isAuthenticated : auth});
	}
	nameCallEvent=(event,id)=>{
		const index= this.state.persons.findIndex(p=>{
			return p.id==id;
		});

		const person= {... this.state.persons[index]};
		person.name=event.target.value;
		const persons=this.state.persons;
		persons[index]=person;
		this.setState({
			persons
		});
	}

	showCallEvent=()=>{
		const doesShow = this.state.show;
		this.setState({
			show :  !doesShow
	});
	}

	deletePersonHandler=(index)=>{
		//const persons=this.state.persons;
		//const persons=this.state.persons.slice();
		const persons=[...this.state.persons];
		persons.splice(index,1);
		this.setState({
			persons
		});
	}
	
	render(){

		console.log('Render');
		let persons=null;
		if(this.state.show)
		{
			/*person=(<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={()=>this.callEvent('Maxi')} 
     	  change = {this.nameCallEvent}>My hobby is cricket!!</Person>);*/
     	 let personArray= [...this.state.persons];
     	 personArray= personArray.map((p,index)=> {
     	 		return {
     	 			...p,
     	 			nameEvent : this.nameCallEvent,
     	 			callEvent : this.callEvent,
     	 			deleteEvent :this.deletePersonHandler
     	 		};
     	 })
     	 
     	 persons = (<Persons persons = {personArray} key="1000"/>);

		}
    return (
      <Auxillary classes={classes.App}>
      <AuthContext.Provider value={{authenticated : this.state.isAuthenticated , login :  this.loginHandler }}>
      <CockPit persons= {this.state.persons} callEvent={this.callEvent} showCallEvent={this.showCallEvent}
          show={this.state.show}/>
       {
       
     	  /*	
     	  this.state.show ?
       		<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={()=>this.callEvent('Maxi')} 
     	  change = {this.nameCallEvent}>My hobby is cricket!!</Person>
     	  : null
     	  */
		  persons
		}
       </AuthContext.Provider>
      </Auxillary>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am here!!!'));
}
  
}

export default Radium(App);
