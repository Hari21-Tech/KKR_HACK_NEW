import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "./background";

const Business = () => {
  return (
    <div>
      {/* <Background /> */}
      <h1 className="text-5xl">business</h1>
      {/* <button style={{ fontSize: 100 }}>SIgn in</button>*/}
      <Link to="/business/signup">
        <Button variant="secondary">Sign Up</Button>
      </Link>
      <Link to="/business/signin">
        <Button variant="secondary">Sign In</Button>
      </Link>{" "}
      *
    </div>
  );
};

export default Business;
