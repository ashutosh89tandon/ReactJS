import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component
{
	render(){
	const person= this.props.persons.map((p,index) =>{
     	 	return (
     	 		<Person name={p.name} age={p.age} click={()=> p.callEvent('Maxi')} key={p.id} 
     	  					change ={(event)=>p.nameEvent(event, p.id)} doubleClick={(event) => p.deleteEvent(event,index)}>My hobby is cricket!!</Person>
     	 		);
     	  });

	return (person);
}

}

export default Persons;