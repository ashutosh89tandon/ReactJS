import React , {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class  App extends Component {
  state={
    text : "Default"
  };


  validateTextLength=(event)=>{
    this.setState({
      text: event.target.value
    });
  }

   deleteCharHandler=(event,index)=>{
    const textArray = [...this.state.text.split("")];
    textArray.splice(index,1);
    this.setState({
      text: textArray.join("")
    });
  }

  render(){

  let textValidator=null;
  let charComponents=null;
  if(this.state.text.length !== 0)  
  {
    textValidator=(
        <ValidationComponent textLength={this.state.text.length} />
      );

    charComponents= this.state.text.split("").map((c,index) => {
      return (
          <CharComponent char={c} onClick={(event) =>{this.deleteCharHandler(event,index)}} />
        );
    })
  }

  return (
    <div className="App">
      <h3> Hello User!!! </h3>
      <input type="text" onChange={this.validateTextLength} value={this.state.text}/>
      {textValidator}
      {charComponents}
    </div>
  );
}
}

export default App;
