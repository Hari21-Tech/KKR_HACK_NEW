import React, { Component } from "react";
import Background from "./background";

class Signup extends Component {
  state = {};

  style = {
    color: "black",
  };

  render() {
    return (
      <React.Fragment>
        {/* <Background /> */}
        {/* <h1 style={this.style}>Signup</h1> */}
        <button style={{ marginRight: 100 }}>SIGNUP AS A CUSTOMER</button>
        <button>SIGNUP AS A BUSINESS</button>
      </React.Fragment>
    );
  }
}

export default Signup;
