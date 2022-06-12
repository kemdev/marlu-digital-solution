import React, { useContext, useEffect } from "react";
import Parallaximg from "./LandingPageComponents/Parallaximg";

import Section from "../Section";
import { MarluContext } from "../../components/Context";

import { motion } from "framer-motion";

import "./landingPage.scss";

import axios from "axios";

import data from "../../data/sections.json";

export default function LandingPage() {
  const { defaultBackgroundColor, colorPalette } = useContext(MarluContext);

  const sections = Object.entries(data);
  console.log("Sections are", sections);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallaximg />

      <div className="d-flex flex-column">
        {sections?.map((section, idx) =>
          section.map(
            (sect) =>
              typeof sect !== "string" && (
                <div className="d-flex flex-column" style={{backgroundColor: sect.bgColor}}>
                  <Section
                    textColor={sect.color}
                    bgColor='inherit'
                    styles={{ width: "50%", alignSelf: !(idx % 2) && "end" }}
                  >
                    <div style={{ width: "50%" }}>
                      <h2>{sect.title}</h2>
                      <p>{sect.content}</p>
                    </div>
                  </Section>
                </div>
              )
          )
        )}
      </div>
    </motion.div>
  );
}
