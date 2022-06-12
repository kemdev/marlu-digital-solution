import React from "react";
import solutionHover from "../../../img/solutionHover.png";

import { Link } from "react-router-dom";

export default function SolutionsDropdown() {
  return (
    <div
      style={{
        backgroundImage: `url(${solutionHover})`,
        zIndex: 100,
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "90% 80%",
      }}
      className="ms-5"
    >
      <div style={{ width: "90%", fontSize: "1.2rem" }}>
        <Link to="/marketing-ceo">Lead Generation</Link>
        <Link to="/marketing-camp">Digitalization of Sales Process</Link>
        <Link to="/webdev">Content Monetization</Link>
      </div>
      <div style={{ width: "50%" }}></div>
    </div>
  );
}
