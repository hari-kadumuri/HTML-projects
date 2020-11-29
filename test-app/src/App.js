import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Diana" supeName="Wonder Woman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clarke" supeName="Superman">
          <button>Click me!</button>
        </Greet>
        <Welcome name="Diana" supeName="Wonder Woman">
          <p>This is children props</p>
        </Welcome>
        <Welcome name="Clarke" supeName="Superman">
          <button>Click me!</button>
        </Welcome>
      </div>
    );
  }
}

export default App;
