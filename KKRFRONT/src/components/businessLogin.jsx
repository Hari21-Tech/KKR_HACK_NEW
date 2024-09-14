import React, { useState } from "react";
// import "./customerSignIn.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "./background";

const BusinessSignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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

      <div className="signup-form">
        <h2>Sign In</h2>
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

          <div>
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
          <Link to="/business">
            <Button variant="secondary">Sign In</Button>
          </Link>

          {/* <button type="submit">Sign In</button>*/}
        </form>
      </div>
    </div>
  );
};

export default BusinessSignIn;
