import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app =(props)=> {
	const [personState,setPersonState] = useState({
		persons : [
		{
			name : "Ashu",
			age : 29
		}
		]

		
	});

	const callEvent=()=>{
		setPersonState({
		persons : [
		{
			name : "Ashutosh",
			age : 29
		}
		]

		
	});
	}
    return (
      <div className="App">
       <h1>Hi, I am here!!!</h1>
       <button onClick={callEvent}>Hit me</button>
       <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobby is cricket!!</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am here!!!'));
  
}

export default app;
