import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component{

	state ={
		persons : [
		{
			name : "Ashu",
			age : 29
		}
		]

		
	};

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

	nameCallEvent=(event)=>{
		this.setState({
		persons : [
		{
			name : event.target.value,
			age : 29
		}
		]

		
	});
	}
	render(){

		const style={
			backgroundColor : 'white',
			font : 'inherit',
			border : '1px solid blue',
			padding : '8px',
			cursor : 'pointer',

		};
    return (
      <div className="App">
       <h1>Hi, I am here!!!</h1>
       <button style={style} onClick={this.callEvent.bind(this,'Max')}>Hit me</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={()=>this.callEvent('Maxi')} 
       change = {this.nameCallEvent}>My hobby is cricket!!</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am here!!!'));
}
  
}

export default App;
