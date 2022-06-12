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
        backgroundPosition: "80% 80%",
      }}
      className="ms-5"
    >
      <div
      style={{width: '50%'}}
      >
        <Link to="/webdev">Web Development</Link>
        <Link to="/marketing-ceo">Merketing - SEO</Link>
        <Link to="/marketing-camp">Merketing - Campain</Link>
      </div>
      <div style={{width: '50%',}}>

      </div>
    </div>
  );
}
