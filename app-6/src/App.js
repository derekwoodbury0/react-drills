import React, { Component } from "react";
import "./App.css";
import ToDo from './ToDo'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newTask: '',
      totalTasks: []
    }
  }

  handleChange = (value) => {
    this.setState ({newTask: value})
  }

  handleClick = () => {
    this.setState ({totalTasks: [...this.state.totalTasks, this.state.newTask]})
  }
  
  render() {
    let list = this.state.totalTasks.map((element, index) => {
      return <ToDo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input 
          placeholder="Enter new task" 
          onChange={ (event) => this.handleChange(event.target.value)}
        />
        <button onClick={this.handleClick}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
