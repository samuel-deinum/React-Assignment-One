import React, { Component } from "react";

class userOutput extends Component {
  state = {};
  render() {
    return (
      <div>
        <p style={this.props.style}>{this.props.username}</p>
        <p>{this.props.username}</p>
      </div>
    );
  }
}

export default userOutput;
