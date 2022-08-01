import React from "react";

import "./Navbar.css";
import CityInputForm from "./CityInputForm";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark">
        <a
          href="https://sage-jalebi-b44e5a.netlify.app/"
          className="navbar-brand"
        >
          <i className="fa-solid fa-sun"></i> sunseeker{" "}
          <i className="fa-solid fa-sun"></i>
        </a>
        <CityInputForm />
      </nav>
    </div>
  );
}
