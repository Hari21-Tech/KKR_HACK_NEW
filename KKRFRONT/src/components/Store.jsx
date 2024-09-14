import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "./background";
// import "./store.css";
// import Shop from "./Shop";

function Store() {
  const [count, setCount] = useState(7);

  return (
    <div>
      {/* <Background /> */}
      <div className="">
        <h1>Availibility Status: Available</h1>
        <h1>Peaple in queue : {` ${count} `}</h1>
        {/* <h1></h1> */}
        {count === 7 ? (
          <Button
            // style={{ style }}
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            Join the Virtual Queue
          </Button>
        ) : (
          <div
            className="
          "
          >
            <h1>U have already queued</h1>
            <h1>U will recieve an email shortly</h1>
            <Link to="/">
              <Button variant="secondary">Go Back</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;
