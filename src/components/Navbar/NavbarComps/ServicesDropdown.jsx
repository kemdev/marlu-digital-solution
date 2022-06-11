import React from "react";
import { Link } from "react-router-dom";

export default function ServiceDropdown() {
  return (
    <div
      style={{
        display: "grid",
        gridAutoColumns: "1fr 1fr",
        gridTemplateColumns: " repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",

      }}
    >
      <Link to="/webdev">Web Development</Link>
      <Link to="/marketing-ceo">Merketing - SEO</Link>
      <Link to="/marketing-camp">Merketing - Campain</Link>
    </div>
  );
}
