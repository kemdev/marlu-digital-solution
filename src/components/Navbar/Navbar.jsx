import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./navbar.scss";

import { CgArrowRightO } from "react-icons/cg";

import HtmlTooltip from "./NavbarComps/HtmlToolTip";
import ServicesDropdown from "./NavbarComps/ServicesDropdown";
import SolutionsDropdown from "./NavbarComps/SolutionsDropdown";
import { useLocation } from "react-router-dom";

// import Image from "../../img/Logo_3.png";
import Image from "../../img/kangaroo.png";

export default function Navbar({
  defaultBackgroundColor,
  setDefaultBackgroundColor,
  textColor,
  toggleShow,
  toggleGeneralFormShow
}) {
  const logoStyle = {
    width: "100%",
    // height: 64,
  };
  const location = useLocation();
  const [scrollNavColor, setScrollNavColor] = useState(undefined);
  const [isPill, setIsPill] = useState(false);
  const [fixed, setFixed] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY) {
      setScrollNavColor("rgb(15 15 15 / 80%)");
      setFixed("fixed-top");
    } else {
      setScrollNavColor("transparent");
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      className={`${fixed}`}
      style={{
        backgroundColor: scrollNavColor,
        transition: "all 0.2s ease-in",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center py-2 px-5 "
        style={{ color: textColor }}
      >
        <Link to="/" className="logo">
          <img style={logoStyle} src={Image} />
        </Link>
        <div
          className="middle-nav-container d-flex justify-content-between align-items-center"
          // style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          <HtmlTooltip title={<SolutionsDropdown />}>Solutions</HtmlTooltip>
          <HtmlTooltip title={<ServicesDropdown />}>Services</HtmlTooltip>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about-us">About US</Link>
          <a to="" onClick={toggleShow} style={{ cursor: "pointer" }}>
            Contact US
          </a>
          <Link to="/career">Career</Link>
        </div>
        <a
        onClick={toggleGeneralFormShow} 
        style={{ cursor: "pointer" }}
        >
          <div
            className={`request-pill`}
            style={{
              border: "2px solid #ddba2e",
              transition: "all 0.5s ease",
              borderRadius: isPill ? "2rem" : "0.5rem",
            }}
            onMouseEnter={() => setIsPill(true)}
            onMouseLeave={() => setIsPill(false)}
          >
            <span style={{ verticalAlign: "middle" }} >Free Consultation</span>
            <span>
              <CgArrowRightO />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
