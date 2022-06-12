import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Unknown() {
  const navigate = useNavigate()

  

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
      className="place-content-center display-1"
      style={{
        display: "grid",
        height: "100vh",
        placeContent: "center",
        fontFamily: "Raleway",
      }}
    >
      <p>
        <span
          style={{
            borderRadius: "50%",
            backgroundColor: "black",
            color: "white",
            padding: "40px",
            fontWeight: "lighter",
          }}
        >
          404
        </span>{" "}
        Page not found
      </p>
      <a
        onClick={e => navigate(-1)}
        style={{cursor: "pointer"}}
        className="position-absolute mt-5 center text-decoration-none text-dark nav-link"
      >
        Back To Previous Page
      </a>
    </motion.div>
  );
}
