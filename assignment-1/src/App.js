import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state={
    name : "Ashutosh",
    age : 29
  }

  stateChangeHandler = (event)=>{
    this.setState({
    name : event.target.value,
    age : 29
  });
  }
  render() {
    return (
      <div className="App">
         <UserInput name={this.state.name} change={this.stateChangeHandler}/>
         <UserOutput name={this.state.name}/>
      </div>
    );
  }
}

export default App;
