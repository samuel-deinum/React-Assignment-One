import React, { Component } from "react";
import "./UserInput.css";

class UserInput extends Component {
  state = {};
  render() {
    return (
      <input
        className="UserInput"
        onChange={this.props.change}
        value={this.props.username}
      />
    );
  }
}

export default UserInput;
