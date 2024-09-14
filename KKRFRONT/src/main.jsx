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
import Shops from "./components/Shops.jsx";
import Store from "./components/Store.jsx";
import Home from "./components/Home.jsx";
import "./index.css";
import CustomerSignIn from "./components/customerSignIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shops" element={<Shops />} />
          <Route exact path="/about" element={<Store />} />
          <Route exact path="/customersign" element={<CustomerSignIn />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/user" element={<User />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <App></App> */}
    </div>
  </StrictMode>
);
