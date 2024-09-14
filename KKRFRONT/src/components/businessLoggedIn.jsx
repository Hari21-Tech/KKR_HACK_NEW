import React, { useEffect, useState } from "react";
import Background from "./background";
import { Card } from "react-bootstrap";
import axios from "axios";

const BusinessLoggedIn = () => {
  // const pplInQueue = [
  //   {
  //     name: "shreyans",
  //     email: "1",
  //   },
  //   { name: "hari", email: "2" },
  //   { name: "anchit", email: "3" },
  // ];

  const [ppl, setPpl] = useState([]);

  const getPpl = () => {
    axios.get("http://127.0.0.1:8000/api/users/").then((res) => {
      // const { data: people } = res;
      const people = res.data;
      console.log(people);
      // console.log(people.data);
      // this.setState({ people });
      setPpl(people);
    });
  };

  useEffect(() => getPpl(), []);

  return (
    <div>
      <Background />

      <Card
        className="bg-blue-100"
        bg="bg-blue-100"
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // className="bg--100"
        // bg="bg-red-100"
        // style={{ justifyContent: "center" }}
      >
        <Card.Body>
          <Card.Title className="text-2xl font-bold" style={{ color: "white" }}>
            {`Peaple in virtual queue: ${ppl.length}`}
          </Card.Title>
          <Card.Title className="text-2xl font-bold" style={{ color: "white" }}>
            {/* <h1 style={{ fontSize: 100 }}>Welcome To QueJI</h1> */}
            {/* {ppl.map((person) => {
              <ul>
                <li>{person.name}</li>
              </ul>;
            })} */}
            {/* {props.shopName} */}
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="bg-blue-100"
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // className="bg--100"
        // bg="bg-red-100"
        // style={{ justifyContent: "center" }}
      >
        <Card.Body>
          <Card.Title className="text-2xl font-bold" style={{ color: "white" }}>
            {/* <h1 style={{ fontSize: 100 }}>Welcome To QueJI</h1> */}
            {/* <ol style={{ listStyleType: "decimal" }}>
              {pplInQueue.map((person, index) => {
                // console.log(person.name);
                return <li key={index}>{person.name}</li>;
              })}
            </ol> */}
            {/* {props.shopName} */}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BusinessLoggedIn;
