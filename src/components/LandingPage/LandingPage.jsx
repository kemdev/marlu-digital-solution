import React, { useContext, useEffect, useState } from "react";
import Parallaximg from "./LandingPageComponents/Parallaximg";

import Section from "../Section";
import { MarluContext } from "../../components/Context";

import { motion } from "framer-motion";

import "./landingPage.scss";

import axios from "axios";

import data from "../../data/sections.json";

import Cards from "./LandingPageComponents/Cards";

import Image1 from "../../img/test-1.jpg";

import Image2 from "../../img/thumbnail.jpeg";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { CgArrowRightO } from "react-icons/cg";

export default function LandingPage({ toggleGeneralFormShow }) {
  const { defaultBackgroundColor, colorPalette } = useContext(MarluContext);

  const sections = Object.entries(data);
  const [isPill, setIsPill] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallaximg />

      <div className="d-flex flex-column sections">
        {sections?.map((section, idx) =>
          section.map(
            (sect) =>
              typeof sect !== "string" && (
                <div className="d-flex flex-column sections-child" key={idx}>
                  <Section
                    textColor={sect.color}
                    bgColor="inherit"
                    styles={{ width: "70%", alignSelf: !(idx % 2) && "end" }}
                    className="d-flex"
                  >
                    {/* {
                        idx === 0 && <svg data-v-521892cf="" width="1188" height="440" viewBox="0 0 1188 440" fill="none" xmlns="http://www.w3.org/2000/svg" class="planets"><g data-v-521892cf="" originY="0" strength="200" tag="g" filter="url(#filter0_i-414191)"><path data-v-521892cf="" d="M14.9449 144.046C-13.0264 100.715 -0.574825 42.9132 42.7562 14.942C86.0873 -13.0293 143.889 -0.577755 171.861 42.7533C199.832 86.0844 187.38 143.886 144.049 171.858C100.718 199.829 42.9162 187.377 14.9449 144.046Z" fill="url(#paint0_radial-636102)"></path></g> <g data-v-521892cf="" originY="0" strength="140" tag="g"><path data-v-521892cf="" d="M1146.45 138.974C1184.11 159.322 1198.14 206.344 1177.79 244C1157.44 281.655 1110.42 295.686 1072.77 275.337C1035.11 254.989 1021.08 207.967 1041.43 170.311C1061.78 132.656 1108.8 118.625 1146.45 138.974Z" fill="url(#paint1_radial-897710)"></path></g> <defs data-v-521892cf=""><filter data-v-521892cf="" id="filter0_i-414191" x="0.00683594" y="0.00390625" width="186.792" height="186.792" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood data-v-521892cf="" flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend data-v-521892cf="" mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix data-v-521892cf="" in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset data-v-521892cf=""></feOffset> <feGaussianBlur data-v-521892cf="" stdDeviation="15"></feGaussianBlur> <feComposite data-v-521892cf="" in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix data-v-521892cf="" type="matrix" values="0 0 0 0 1 0 0 0 0 0.656 0 0 0 0 0.4625 0 0 0 0.11 0"></feColorMatrix> <feBlend data-v-521892cf="" mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter> <radialGradient data-v-521892cf="" id="paint0_radial-636102" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(159.5) rotate(126.33) scale(201.709)"><stop data-v-521892cf="" stop-color="#310F41"></stop> <stop data-v-521892cf="" offset="0.567337" stop-color="#160815"></stop> <stop data-v-521892cf="" offset="0.840936" stop-color="#460D13"></stop> <stop data-v-521892cf="" offset="1" stop-color="#9C4F2E"></stop></radialGradient> <radialGradient data-v-521892cf="" id="paint1_radial-897710" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1185.43 188.104) rotate(165.197) scale(164.086)"><stop data-v-521892cf="" stop-color="#090909"></stop> <stop data-v-521892cf="" offset="0.75" stop-color="#140D17"></stop> <stop data-v-521892cf="" offset="0.880208" stop-color="#450F15"></stop> <stop data-v-521892cf="" offset="1" stop-color="#624B10"></stop></radialGradient></defs></svg>
                      } */}
                    <div
                      style={{
                        width: "100%",
                        fontSize: "1.5em",
                        backgroundColor: "#1d1c23",
                        borderRadius: "25px",
                        padding: "50px",
                      }}
                    >
                      <h2 className=" display-1">{sect.title.toUpperCase()}</h2>
                      <hr className="mb-4" />
                      <p style={{ lineHeight: "2.1em" }}>{sect.content}</p>
                      <p style={{ lineHeight: "2.1em" }}>{sect?.c1}</p>
                      <p style={{ lineHeight: "2.1em" }}>{sect?.c2}</p>
                    </div>
                  </Section>
                </div>
              )
          )
        )}

        <div className="d-flex justify-content-center">
          <MDBCard style={{ maxWidth: "540px" }} className="my-3">
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src={Image1}
                  alt="..."
                  fluid
                  style={{
                    height: "120.1%",
                    objectFit: "cover",
                    objectPosition: "right",
                  }}
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Bill Gates from Microsoft</MDBCardTitle>
                  <MDBCardText>
                    I'm very satisfied with what Marlu delivered.They increased
                    the exposure of my Company tenfold and also digitalized most
                    of my company.
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">5 months ago</small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          <MDBCard style={{ maxWidth: "540px" }} className="my-3 ms-5">
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src={Image2}
                  alt="..."
                  fluid
                  style={{ height: "100%" }}
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Larry Page from Google</MDBCardTitle>
                  <MDBCardText>
                    Marlu helped my company to get better Results on DuckDuckGo
                    Search Engine. We now got alot more customers than before.{" "}
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">1 months ago</small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>

      <div
        style={{
          color: "white",
          textAlign: "center",
          display: "grid",
          placeContent: "center",
        }}

        className="py-5"
      >
        <a onClick={toggleGeneralFormShow} style={{ cursor: "pointer" }}>
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
            <span style={{ verticalAlign: "middle" }}>Request a Free Consultation</span>
            <span className="ms-2">
              <CgArrowRightO />
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
