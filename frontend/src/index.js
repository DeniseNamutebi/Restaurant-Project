import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";
import Menu from "./components/menu";
import Nav from "./components/nav";
import Booking from "./components/booking";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Confirm from "./components/confirm";
import Order from "./components/order";

console.log("client id", process.env.REACT_APP_AUTH0_CLIENT_ID)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env?.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env?.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={`https://${process.env?.REACT_APP_AUTH0_DOMAIN}/api/v2/`}
      scope="read:current_user update:current_user_metadata"
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/confirm/order" element={<Confirm type="order" />} />
          <Route
            path="/confirm/booking"
            element={<Confirm type="reservation" />}
          />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
