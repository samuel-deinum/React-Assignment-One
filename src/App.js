import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "SamDeinum"
  };

  stateHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <UserInput change={this.stateHandler} username={this.state.username} />
        <UserOutput username={this.state.username} style={style} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
