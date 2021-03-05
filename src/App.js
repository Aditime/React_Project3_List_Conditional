import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Validation/Char';

/**
 * 1) create input in render and create the methoßßd
 * 2) define the method outside render , inside app
 * 3) define the state.
 * 4) go to the method and set the state value to the event value. use this.setState. 
 * 5) put the value in the input as value = {this.state.STATEVALUE}
 * 6) create component char 
 * 7) create an inline style 
 * 8) create the const charlist that maps each and every character the user enters and pass that to char
 * 9) add the const charlist into render return statement. 
 * 10) add the key into the mapping function to get rid of key warning message.
 * 11) create a function deletehandler which will take the index of the character which is clicked 
 * and to be removed
 * 12) Add that function call in the mapping function in the Clicked event.
 * 
 * 
 * * */
class App extends Component {
  state = {
    person: ''
  }


  inputHandler = (event) =>{
    this.setState({person: event.target.value});
  }

deleteCharHandler = (index) =>{
  const text = this.state.person.split('');
  text.splice(index,1);
  const updateText= text.join('');
  this.setState({person: updateText});
};



  render() {

    const charlist = this.state.person.split('').map((char,index) =>{
      return <Char 
      character = {char} 
      key={index}
      clicked = {() => this.deleteCharHandler(index)}  // this is annoous function
      >

      </Char>
    });
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

      <input type = "text"  
          onChange={(event) => this.inputHandler(event)}
           value={this.state.person}
          />
        <p>{this.state.person}</p>
        <Validation length={this.state.person.length}></Validation>
        {charlist}
      </div>
    );
  }
}

export default App;
