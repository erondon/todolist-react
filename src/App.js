import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { directive } from '@babel/types';
//import {Fragment} from 'react';
//import { ninvoke } from 'q';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: [],
   
    }
  }
changeUserInput(input){
  this.setState({
    userInput: input,
    
  });
}
addToList(input){

  let listArray = this.state.list;

  listArray.push(input);


  this.setState({
    list: listArray,
    userInput: ''
  })
}

removeFromLIst(){
  
  this.setState({
    
  })
}
render(){

  return (
    <div className='container'>
      <div className='row'>
       <div className='col-md-12 text-center'>
         <h1>React ToDo List</h1>
       <input
       className='form-control'
      onChange={(e)=>this.changeUserInput(e.target.value)}
      value={this.state.userInput}
      type='text'
      />
      <button className='btn btn-success'onClick={()=>this.addToList(this.state.userInput)}>Add</button>

      <ul> 

      {this.state.list.map((val)=><li><h2>{val}</h2></li>)}

      </ul>
       </div>
     
      </div>
      
    </div>
  )
}
}
export default App;
