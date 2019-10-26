import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cloud">
          <h1>Smurf Village</h1>
        </div>

        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
