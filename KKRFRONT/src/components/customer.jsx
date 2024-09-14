import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "./background";

const Customer = () => {
  return (
    <div>
      {/* <Background /> */}
      <h1 className="text-5xl">Customer</h1>
      {/* <button style={{ fontSize: 100 }}>SIgn in</button>*/}
      <Link to="/custsignup">
        <Button variant="secondary">Sign Up</Button>
      </Link>
      <Link to="/custsignin">
        <Button variant="secondary">Sign In</Button>
      </Link>{" "}
      *
    </div>
  );
};

export default Customer;
