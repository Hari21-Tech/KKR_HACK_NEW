import React, { useState } from "react";
import "./customerSignUp.css";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Background from "./background";
// const axios = require("axios");
import axios from "axios";

const JoinQueue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    // password: "",
    // confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    // if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      //   formErrors.email = "Email is invalid";
      // if (!formData.password) formErrors.password = "Password is required";
      // if (formData.password.length < 1)
      //   formErrors.password = "Password must be at least 6 characters";
      // if (formData.password !== formData.confirmPassword)
      //   formErrors.confirmPassword = "Passwords do not match";

      return formErrors;
  };

  const handleSubmit = (e) => {
    // console.log("abc");
    // const formValidationErrors = validateForm();
    // if (Object.keys(formValidationErrors).length === 0) {
    // axios({
    //   url: "http://localhost:8000/api/user/register",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // authorisation: "token",
    //   },
    //   data: formData,
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err.message));

    axios
      .post("http://localhost:8000/email/mail/", {
        formData,
      })
      .then((response) => {
        // console.log("Form Submitted:", formData);
        console.log(response.data);
        // navigate("/shops");
      })
      .catch((error) => {
        console.log("Form Submitted:", formData);
        console.error("Error:", error);
      });

    setSubmitted(true);
    setFormData({
      // name: "",
      email: "",
      // password: "",
      // confirmPassword: "",
    });
    e.preventDefault();
  };

  return (
    <div
      className="
    "
    >
      {/* <Background /> */}
      <Card>
        <div className="signup-form">
          <h2 style={{ color: "white", marginBottom: 20, fontSize: 30 }}>
            Join Virtual Queue
          </h2>
          <form onSubmit={handleSubmit}>
            {/* <div>
              <label>Name</label>
              <input
            type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
              </div> */}

            <div>
              <label style={{ color: "white" }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* <div>
              <label>Password</label>
              <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
                )}
                </div> */}

            {/* <div>
              <label>Confirm Password</label>
              <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
                )}
                </div> */}
            {/* <Link to="/shops"> */}
            <button
              // onClick={handleSubmit}
              type="submit"
              style={{ color: "white", marginBottom: 20 }}
            >
              Enter
            </button>
            {submitted && (
              <div style={{ color: "white" }} className="success-message">
                Successfully joined the queue
                <br />
                You will recieve an email soon !
              </div>
            )}
            {/* <Button variant="secondary">Sign Up</Button> */}
            {/* </Link> */}
          </form>
        </div>
      </Card>
    </div>
  );
};

export default JoinQueue;
