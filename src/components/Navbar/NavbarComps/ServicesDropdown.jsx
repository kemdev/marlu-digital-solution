import React from "react";
import { Link } from "react-router-dom";

import marketing from "../../../img/marketing.png";

export default function ServiceDropdown() {
  return (
    <div
      style={{
        backgroundImage: `url(${marketing})`,
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "90% 80%",
      }}
      className="ms-5"
    >
      <div style={{ width: "80%", fontSize: "1.2rem" }}>
        <Link to="/marketing-ceo">SEO - Organic Traffic</Link>
        <Link to="/marketing-camp">SEA - Page Search Display</Link>
        <Link to="/webdev">Web Development & Web design</Link>
      </div>
      <div style={{ width: "50%" }}></div>
    </div>
  );
}
