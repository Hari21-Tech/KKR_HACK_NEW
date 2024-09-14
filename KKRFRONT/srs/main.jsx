import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// import "./main.css";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App.jsx";
// import { Route, Router, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Shops from "./components/Shops.jsx";
import Store from "./components/Store.jsx";
import CustomerSignUp from "./components/customerSignUp.jsx";
import CustomerSignIn from "./components/customerSignIn.jsx";
import Home from "./components/Home.jsx";
import Customer from "./components/customer.jsx";
import Business from "./components/business.jsx";
import "./index.css";
import Particles from "@tsparticles/react";
import Background from "./components/background.jsx";
import BusinessSignIn from "./components/businessLogin.jsx";
import BusinessSignUp from "./components/businessSignUp.jsx";
import BusinessLoggedIn from "./components/businessLoggedIn.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/business" element={<BusinessLoggedIn />} />
          <Route exact path="/shops" element={<Shops />} />
          <Route exact path="/about" element={<Store />} />
          <Route exact path="/customerSign" element={<Customer />} />
          <Route exact path="/businessSign" element={<Business />} />
          <Route exact path="/custsignin" element={<CustomerSignIn />} />
          <Route exact path="/custsignup" element={<CustomerSignUp />} />
          <Route exact path="/business/signin" element={<BusinessSignIn />} />
          <Route exact path="/business/signup" element={<BusinessSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/user" element={<User />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <App></App> */}
    </div>
  </StrictMode>
);
