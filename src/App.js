import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      tareas : [],
      tarea :'',

    }
    
  } 

onChange = (event) => {
  this.setState({term: event.target.value});


}

onSubmit = (event) => {
  event.preventDefault()
  this.setState({
    term: '',
    items: [...this.state.items, this.state.term]

  });
}





  
  render(){
   return(
    <div>


<input value={this.state.term} onChange={this.onChange} />
<form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
   </form>

    </div>
     ); 
  }

}
export default App;
