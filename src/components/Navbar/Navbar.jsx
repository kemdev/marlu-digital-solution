import React from "react";

import { Link } from "react-router-dom";

import "./navbar.scss";

import { CgArrowRightO } from "react-icons/cg";

import HtmlTooltip from "./NavbarComps/HtmlToolTip";
import ServicesDropdown from "./NavbarComps/ServicesDropdown";
import SolutionsDropdown from "./NavbarComps/SolutionsDropdown";

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
        <HtmlTooltip  title={<SolutionsDropdown />}>
          Solutions
        </HtmlTooltip>
        <HtmlTooltip title={<ServicesDropdown />}>
          Services
        </HtmlTooltip>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about-us">Abous US</Link>
      </div>
      <Link to="/request">
        <div
          className="request-pill rounded-pill "
          style={{ border: "2px solid black" }}
        >
          <span style={{ verticalAlign: "middle" }}>Free Consolutation</span>{" "}
          <span>
            <CgArrowRightO />
          </span>
        </div>
      </Link>
     
    </div>
  );
}
