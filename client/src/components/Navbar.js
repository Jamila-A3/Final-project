import React from "react";
import './style.css'
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link> */}
      {/* </li> */}
      <li className="nav-item">
        <Link
          to="/tours"
          className={window.location.pathname === "/tours" ? "nav-link active" : "nav-link"}
        >
          Tours
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
        to="/searchresultscontainer" 
          className={window.location.pathname === "/searchresultscontainer" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
    </ul>
    
  );
}

export default NavTabs;