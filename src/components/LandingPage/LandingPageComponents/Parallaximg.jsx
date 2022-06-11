import React from "react";
import "./Parallaximg.scss";
import { Parallax } from "react-parallax";

export default function header() {
  return (
    <Parallax
      className="image"
      bgImage="https://i.pinimg.com/originals/c7/5c/51/c75c512a82d73171f07c7f42e50b83f5.jpg"
      strength={500}
    >
      <div className="content">
        <span className="img-txt">
            <h1>JUMP YOUR BUSINESS</h1>
            <h2>TO THE NEXT LEVEL!</h2>
            <h3>With Marlu Digital Solutions</h3>
        </span>
      </div>
    </Parallax>
  );
}
