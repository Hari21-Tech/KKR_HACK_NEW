import React, { useState, createContext, useContext } from "react";
// import "./customerSignIn.css";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Background from "./background";
import axios from "axios";

// const emailContext = createContext();

// export const emailProvider = ({ childen }) => {
//   const [mailState, setMailState] = useState("");

//   return (
//     <emailContext.Provider value={{ mailState, setMailState }}>
//       {childen}
//     </emailContext.Provider>
//   );
// };

// export const useemailContext = () => createContext(emailContext);

const CustomerSignIn = () => {
  const navigate = useNavigate();
  // navigate("/shops");

  const handleRedirect = () => {
    navigate("/shops");
  };

  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    passd: "",
    // confirmPassword: "",
  });

  // const dataToBeExported;

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
    if (!formData.passd) formErrors.passd = "Password is required";
    if (formData.passd.length < 1)
      formErrors.passd = "Password must be at least 6 characters";
    // if (formData.password !== formData.confirmPassword)
    //   formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({
        // name: "",
        email: "",
        passd: "",
        // confirmPassword: "",
      });
      console.log(formData);

      axios
        .post(
          `http://localhost:8000/user/register/`,
          // { mode: "no-cors" },
          formData
        )
        .then((res) => {
          console.log(formData);
          navigate("/shops");
          console.log(res);
          console.log(res.data);
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
        <h2 style={{ color: "white", marginBottom: 20 }}>Sign In</h2>
        {submitted && (
          <div style={{ color: "white" }} className="success-message">
            Sign In Successful!
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
            <label style={{ color: "white" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>

          <div>
            <label style={{ color: "white" }}>Password</label>
            <input
              type="passd"
              name="passd"
              value={formData.passd}
              onChange={handleChange}
            />
            {/* {errors.passd && <span className="error">{errors.passd}</span>} */}
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerSignIn;
