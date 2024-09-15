import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Shop from "./Shop";
// import "./shops.css";

import Signup from "./Signup";
import "./Home.css";
import Grid from "./Grid";
import { Link, Router } from "react-router-dom";
import { Card } from "react-bootstrap";
import Background from "./background";
import axios from "axios";

function Header() {
  // state = {};
  const [shop, setShop] = useState("");

  // const getShop = () => {

  // setTimeout(() => {
  //   axios.get("http://127.0.0.1:5000/api/data").then((res) => {
  //     // const { data: people } = res;
  //     const shop = res.data;
  //     console.log(shop);
  //     // console.log(people.data);
  //     // this.setState({ people });
  //     setShop(shop);
  //   });
  // }, 5000);
  // };

  const askForEmail = () => {
    // console.log("qejnfq");
    navigate("/shops/joinQueue");
  };

  // useEffect(() => getShop(), []);

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
          <Card.Title className="text-2xl font-bold" style={{ color: "white" }}>
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
        <h1 className="aifma" style={{ color: "white" }}>
          Current Locality: Patiala
        </h1>
      </div>
      <div>
        <h1 style={{ color: "white" }}>Shops</h1>
      </div>
      {/* </Card> */}
      {/* <Button></Button> */}
      <div
      // style={{ background: "grey" }}
      >
        <Grid />
        {/* <h1>efjekjn</h1> */}
      </div>
    </div>
  );
}

export default Header;
