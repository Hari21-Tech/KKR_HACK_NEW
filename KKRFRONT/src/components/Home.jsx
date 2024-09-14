import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Shop from "./Shop";

import Signup from "./Signup";
import "./Home.css";
import Grid from "./Grid";
import { Link, Router } from "react-router-dom";
import Particles from "@tsparticles/react";
import Background from "./background";
import { Card } from "react-bootstrap";
import axios from "axios";

class Header extends Component {
  state = {
    people: [],
  };

  // componentDidMount() {
  //   axios.get("http://127.0.0.1:8000/api/users/").then((res) => {
  //     const people = res;
  //     console.log(people.data);
  //     this.setState({ people });
  //     return (
  //       <div className="">
  //         <h1 style={{ color: "black" }}>TYDYYG</h1>
  //       </div>
  //     );
  //   });
  // }

  // console.log(this.state.people);
  // axios.post("http://127.0.0.1:8000/api/users/create")
  //   .then(res => {
  //     console.log(res);
  //   })

  // console.log(people.data)

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
              {/* {this.state.people.data.map((person) => {
                return (
                  <ul>
                  <li>{person.name}</li>
                  </ul>
                  );
                  })} */}
              <h1 style={{ fontSize: 100 }}>Welcome To QueJI</h1>
              {/* <h1 style={{ fontSize: 100 }}>To</h1> */}
              {/* {props.shopName} */}
            </Card.Title>
            {/* <Link to="/" /> <button>Home</button> */}
            <Link to="/customersign">
              <Button variant="secondary">Customer</Button>
            </Link>
            <Link to="/businesssign">
              <Button variant="secondary">Business</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Header;
