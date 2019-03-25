import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Tokyo"
          country="Japan"
          distance="far"
          photo="https://www.challenges.fr/assets/img/2018/07/13/cover-r4x3w1000-5b48783281a35-carrefour-de-shibuya-l-intersection-est-un-symbole-de.jpg"
        />
       <Travel
          destination="Lille"
          country="France"
          distance="0km"
          photo="https://france3-regions.francetvinfo.fr/hauts-de-france/sites/regions_france3/files/styles/top_big/public/assets/images/2018/08/18/maxnewsspecial201939-3805646.jpg?itok=51KbE-GM"
        />
      </div>
    );
  }
}

export default App;