import React from "react";

import { Link } from "react-router-dom";

import "./navbar.scss";

import { BsArrowRightCircle } from "react-icons/bs";

export default function Navbar() {
  const logoStyle = {
    width: 64,
    height: 64,
  };

  return (
    <div className="d-flex justify-content-between align-items-center py-2 px-5">
      <div className="logo">
        <img
          style={logoStyle}
          src="https://www.pngfind.com/pngs/m/16-160626_kangaroo-png-kangaroo-icon-transparent-png.png"
        />
      </div>
      <div
        className="middle-nav-container d-flex justify-content-between align-items-center text-dark"
        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
      >
        <Link to="/solutions">Solutions</Link>
        <Link to="/services"> Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about-us">Abous US</Link>
      </div>
      <Link to="/request">
        <div className="request-pill rounded-pill p-2" style={{ border: "2px solid black" }}>
          Request a Free Consolutation <BsArrowRightCircle />
        </div>
      </Link>
    </div>
  );
}
