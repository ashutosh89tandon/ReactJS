import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component{

	state ={
		persons : [
		{
			id: 1,
			name : "Ashu",
			age : 29
		}
		],
		show : true
		
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

		const style={
			backgroundColor : 'white',
			font : 'inherit',
			border : '1px solid blue',
			padding : '8px',
			cursor : 'pointer',

		};

		let person=null;
		if(this.state.show)
		{
			/*person=(<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={()=>this.callEvent('Maxi')} 
     	  change = {this.nameCallEvent}>My hobby is cricket!!</Person>);*/
     	 person= this.state.persons.map((p,index) =>{
     	 	return (
     	 		<Person name={p.name} age={p.age} click={()=>this.callEvent('Maxi')} key={p.id} 
     	  					change = {(event)=>this.nameCallEvent(event,p.id)} doubleClick={()=>this.deletePersonHandler(index)}>My hobby is cricket!!</Person>
     	 		);
     	  })
		}

    return (
      <div className="App">
       <h1>Hi, I am here!!!</h1>
       <button style={style} onClick={this.callEvent.bind(this,'Max')}>Hit me</button><br/>
       <button style={style} onClick={this.showCallEvent}>Hit me to Hide or Show!</button>
       {
       /*	this.state.show ?
       		<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={()=>this.callEvent('Maxi')} 
     	  change = {this.nameCallEvent}>My hobby is cricket!!</Person>
     	  : null*/

       }
       {person}
       
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am here!!!'));
}
  
}

export default App;
