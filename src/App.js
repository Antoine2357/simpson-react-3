import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp"
import Quotes from "./Quotes";
import Work from "./working"
import header from "./animation"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Work />
        <Lamp on />
        <Lamp />
        <Quotes />
        
      </div>
    );
  }
}

export default App;