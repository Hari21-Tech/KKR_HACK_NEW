import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Shop from "./Shop";

// import Signup from "./Signup";
import "./Home.css";
import Grid from "./Grid";
// import { Link, Router } from "react-router-dom";
import { Card } from "react-bootstrap";
import Background from "./background";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="Home">
        <Background />
        <Card
          style={{ background: "black" }}
          // className="bg--100"
          // bg="bg-red-100"
          // style={{ justifyContent: "center" }}
        >
          <Card.Body>
            <Card.Title
              className="text-2xl font-bold"
              style={{ color: "white" }}
            >
              {/* <h1 style={{ fontSize: 100 }}>Welcome To QueJI</h1> */}
              <h1
                style={{
                  fontSize: 50,
                }}
              >
                Current Locality : Patiala
              </h1>
              <Button
                onClick={() => {
                  // changeLocality()
                }}
              >
                Change Locality
              </Button>
              {/* {props.shopName} */}
            </Card.Title>
            {/* <Link to="/" /> <button>Home</button> */}
            {/* <Link to="/customer">
              <Button variant="secondary">Customer</Button>
            </Link>
            <Link to="/business">
              <Button variant="secondary">Business</Button>
            </Link> */}
          </Card.Body>
        </Card>
        <div className="Navbar">
          {/* <Signup /> */}

          {/* <Card> */}
          <h1 style={{ color: "white" }}>Current Locality: Patiala</h1>
        </div>
        <div style={{}} className="Navbar">
          <h1 style={{ color: "white" }}>Shops</h1>
        </div>
        {/* </Card> */}
        {/* <Button></Button> */}
        <div
          // style={{ background: "grey" }}
          className=""
        >
          <Grid />
          {/* <h1>efjekjn</h1> */}
        </div>
      </div>
    );
  }
}

export default Header;
