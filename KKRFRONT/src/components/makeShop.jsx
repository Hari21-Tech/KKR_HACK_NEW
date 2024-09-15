import React, { useState } from "react";
// import "./customerSignIn.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "./background";
import axios from "axios";

const MakeShop = () => {
  const [formData, setFormData] = useState({
    // name: "",
    name: "",
    rating: "",
    open_t: "",
    close_t: "",
    area: "",
    // confirmPassword: "",
  });

  // const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const validateForm = () => {
  //   let formErrors = {};
  //   // if (!formData.name.trim()) formErrors.name = "Name is required";
  //   // if (!formData.shopName.trim()) formErrors.shopName = "Email is required";
  //   // if (!/\S+@\S+\.\S+/.test(formData.shopName)) formErrors.shopName = "Email is invalid";
  //   // if (!formData.rating) formErrors.rating = "Password is required";
  //   // if (formData.rating.length < 1)
  //   //   formErrors.rating = "Password must be at least 6 characters";
  //   // if (formData.password !== formData.confirmPassword)
  //   //   formErrors.confirmPassword = "Passwords do not match";

  //   return formErrors;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formValidationErrors = validateForm();
    // if (Object.keys(formValidationErrors).length === 0) {
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({
      // name: "",
      name: "",
      rating: "",
      area: "",
      open_t: "",
      close_t: "",
      // confirmPassword: "",
    });

    console.log(formData);

    axios
      .post(
        `http://localhost:8000/shop/register/`,
        // { mode: "no-cors" },
        { formData }
      )
      .then((res) => {
        console.log(formData);
        console.log(res);
        console.log(res.data);
      });
    // };
  };
  return (
    <div
      className="
    "
    >
      {/* <Background /> */}

      <div className="signup-form">
        <h2 style={{ color: "white" }} className="mb-3">
          Enter Shop Details
        </h2>

        {submitted && (
          <div style={{ color: "white" }} className="success-message">
            Sign Up Successful!
          </div>
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
            <label style={{ color: "white" }}>Shop Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {/* {errors.a && <span className="error">{errors.a}</span>} */}
          </div>
          <div>
            <label style={{ color: "white" }}>Opening Time</label>
            <input
              type="number"
              name="open_t"
              value={formData.open_t}
              onChange={handleChange}
            />
            {/* {errors.a && <span className="error">{errors.a}</span>} */}
          </div>
          <div>
            <label style={{ color: "white" }}>Closing Time</label>
            <input
              type="number"
              name="close_t"
              value={formData.close_t}
              onChange={handleChange}
            />
            {/* {errors.a && <span className="error">{errors.a}</span>} */}
          </div>
          <div>
            <label style={{ color: "white" }}>Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
            {/* {errors.a && <span className="error">{errors.a}</span>} */}
          </div>
          <div style={{ color: "white" }}>
            (In sq meters)
            <label>Area</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
            />
            {/* {errors.a && <span className="error">{errors.a}</span>} */}
          </div>
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
          {/* <Link to="/shops">
            <Button variant="secondary">Sign In</Button>
          </Link> */}

          <button style={{ color: "white" }} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeShop;
