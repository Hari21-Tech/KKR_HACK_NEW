import React, { useState } from "react";
import "./customerSignUp.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "./background";
// const axios = require("axios");
import axios from "axios";

const CustomerSignUp = () => {
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
      formErrors.email = "Email is invalid";
    if (!formData.password) formErrors.password = "Password is required";
    // if (formData.password.length < 1)
    //   formErrors.password = "Password must be at least 6 characters";
    // if (formData.password !== formData.confirmPassword)
    //   formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const handleSubmit = (e) => {
    console.log("abc");
    e.preventDefault();
    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length === 0) {
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

      console.log("gaandMatMaaroPls", formData);
      axios
        .post(
          "http://localhost:8000/api/user/register/",
          {
            formData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            // withCredentials: true, // If your API requires credentials (cookies, auth headers)
          }
        )
        .then((response) => {
          // console.log("Form Submitted:", formData);
          console.log(response.data);
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
    } else {
      setErrors(formValidationErrors);
    }
  };

  return (
    <div
      className="
    "
    >
      {/* <Background /> */}
      <Card>
        <div className="signup-form">
          <h2>Sign Up</h2>
          {submitted && (
            <div className="success-message">Sign Up Successful!</div>
          )}
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
              <label>Email</label>
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
            <button type="submit">Sign Up</button>
            {/* <Button variant="secondary">Sign Up</Button> */}
            {/* </Link> */}
          </form>
        </div>
      </Card>
    </div>
  );
};

export default CustomerSignUp;
