import React, { Component } from "react";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
          source="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/space.jpg"
        />
      </div>
    );
  }
}

export default App;

