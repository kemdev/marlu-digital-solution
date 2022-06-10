import React from "react";
import "./Parallaximg.scss";
import { Parallax } from "react-parallax";

export default function header() {
  return (
    <Parallax
      className="image"
      bgImage="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
      strength={500}
    >
      <div className="content">
        <span className="img-txt">
            <h1>"Your company's a diamond! Win or lose, we mesh and ship!"</h1>
            <h2>Let go of your branding axieties</h2>
            <h2>You're in good hands with MDS</h2>
        </span>
      </div>
    </Parallax>
  );
}
