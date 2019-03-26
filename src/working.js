import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";

class Work extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homerworking : false
      };
    }
  
    handleClick = (event) => {
      console.log('Button clicked');
      this.setState({ homerworking: !this.state.homerworking });
      event.target.classList.add('work');
    };


    render() {
      const work = this.state.homerworking ? 'Working' : 'Not working';
      if (this.state.homerworking == true){
           console.log("ok")
          return (<header className="App-header">
          <img src={logo} className="App-logo work" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button
            onClick={this.handleClick}
            className={work}
          >
          {work.toUpperCase()}
          </button>
        </header>)
         
         
          }
      else if (this.state.homerworking == false){
        return <header className="App-header">
        <img src={logo} className="App-logo " alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
        <button
            onClick={this.handleClick}
            className={work}
          >
          {work.toUpperCase()}
          </button>
      </header>
      }
     
      
    }


  }
  
  export default Work;