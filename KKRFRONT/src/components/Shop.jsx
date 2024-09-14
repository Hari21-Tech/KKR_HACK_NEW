import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Background from "./background";
import axios from "axios";
import { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

function Shop(props) {
  // axios.get("http://localhost:8000/api/users/true/").then((res) => {
  //   console.log(res.data);
  // });

  // const navigate = useNavigate();
  // function LoginLayout() {
  //   let navigate = useNavigate();
  //   const routeChange = () => {
  //     let path = `newPath`;
  //     navigate(path);
  //   };

  return (
    <div
      className="
    "
    >
      <Background />
      <Card
        // className="bg-blue-100"
        // bg="bg-green-100"
        style={{ width: "18rem", marginRight: 20, background: "aqua" }}
      >
        <Card.Body>
          <Card.Title className="text-3xl font-bold">
            {`${props.shopName}`}
          </Card.Title>
          <Card.Text className="4xl">{`🌟${props.shopRating}`}</Card.Text>
          <Card.Text className="2xl">Opens: 8 AM</Card.Text>
          <Card.Text className="2xl">Closes: 8 PM</Card.Text>
          {props.isAvailable ? (
            <div className="mb-2">
              <Card.Title className="text-2xl font-bold">{`Status: Availaible `}</Card.Title>
            </div>
          ) : (
            <div className="">
              <Card.Title className="text-2xl font-bold">{`Status: Not Availaible `}</Card.Title>

              <Button onClick={joinQueue} variant="primary">
                Join Virtual Queue
              </Button>
            </div>
          )}

          {/* <Link to="/" /> <button>Home</button> */}
          {/* <Link to="/about">
          </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
}

const joinQueue = () => {};

export default Shop;

// <Card bg='bg-indigo-100'>
//             <h2 className='text-2xl font-bold'>For Employers</h2>
//             <p className='mt-2 mb-4'>
//               List your job to find the perfect developer for the role
//             </p>
//             <Link
//               to='/add-job'
//               className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
//             >
//               Add Job
//             </Link>
//           </Card>
