import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      listArray: ['Derek', 'Alexis', 'Derek', 'Alexis']
    }
  }

  render() {
    let namesList = this.state.listArray.map((element, i) => {
      return <h2 key={i}>{element}</h2>
    })
    return <div className="App">
      {namesList}
    </div>
  }
  
  // render() {
  //   return (
  //     <div className="App">
  //      <h2>{this.state.listArray[0]}</h2>
  //      <h2>{this.state.listArray[1]}</h2>
  //      <h2>{this.state.listArray[2]}</h2>
  //      <h2>{this.state.listArray[3]}</h2>
  //     </div>
  //   );
  // }
}

export default App;
