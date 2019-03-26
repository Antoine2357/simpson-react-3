import React, { Component } from 'react';
import "./working"
import logo from "./logo.svg";
import "./App.css";
class Head extends React.Component {
    constructor() {
      super();
      this.state = {
        classValue: ''
      }
    }
    handleClick = (event) => {


        event.target.classList.add('work');
      };
    render() {
        if (this.state.homerworking == undefined){
            return <header className="App-header">
            <img src={logo} className="App-logo " alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
          </header>
          }
        

        else if (this.state.homerworking == true){
            console.log("ok")
           return (<header className="App-header">
           <img src={logo} className="App-logo work" alt="logo" />
           <h1 className="App-title">Simpsons Quotes</h1>
         </header>)
          
          
           }
       }
    
  }
  
  export default Head