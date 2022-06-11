import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./navbar.scss";

import { CgArrowRightO } from "react-icons/cg";

import HtmlTooltip from "./NavbarComps/HtmlToolTip";
import ServicesDropdown from "./NavbarComps/ServicesDropdown";
import SolutionsDropdown from "./NavbarComps/SolutionsDropdown";

// import Image from "../../img/Logo_3.png";
import Image from "../../img/logo2.png";

export default function Navbar({
  defaultBackgroundColor,
  setDefaultBackgroundColor,
  textColor,

}) {


  const logoStyle = {
    width: '100%',
    // height: 64,
  };

  const [scrollNavColor, setScrollNavColor] = useState(undefined);
  const [isPill, setIsPill] = useState(false);
  
  const listenScrollEvent = (e) => {
    console.log('E is', e)
    if (window.scrollY > 100) {
      setScrollNavColor( "inherit");
    } else {
      setScrollNavColor( "transparent");
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () =>
    window.removeEventListener('scroll', listenScrollEvent);

  }, [])

  console.log('Windows', window.scrollY)
  



  return (
    <div className={`fixed-top`}  style={{backgroundColor: scrollNavColor}}>
      <div
        className="d-flex justify-content-between align-items-center py-2 px-5 "
        style={{  color: textColor }}
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
          <Link to="/about-us">Abous US</Link>
        </div>
        <Link to="/request">
          <div
            className={`request-pill`}
            style={{
              border: "2px solid white",
              transition: "all 0.5s ease",
              borderRadius: isPill ? "2rem" : "0.5rem",
            }}
            onMouseEnter={() => setIsPill(true)}
            onMouseLeave={() => setIsPill(false)}
          >
            <span style={{ verticalAlign: "middle" }}>Free Consolutation</span>{" "}
            <span>
              <CgArrowRightO />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
