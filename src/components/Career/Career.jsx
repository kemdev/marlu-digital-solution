import React, { useContext, useState } from "react";
import "./career.scss";

import { motion } from "framer-motion";

import Form from "../Form/GeneralForm";
import { MarluContext } from "../Context";
export default function Career() {
  const { isApplyJob, setIsApplyJob } = useContext(MarluContext);
  const [jobShow, setJobShow] = useState();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form isApplyJob={isApplyJob} jobShow={jobShow} setJobShow={setJobShow} title='Work With Us' buttonTitle='Submit Now' />
      <div className="career-container">
        <div className="career-img-left d-flex align-items-center">
          <div className="d-flex flex-column">
            <h4>CAREERS AT MARLU DIGITAL SOLUTIONS</h4>
            <h1>JOIN US NOW</h1>
            <p className="lead">
              We have many jobs to offer. Joining ou agency is a good step if
              you want to develop and perfect your skills in a certain area of
              web development, marketing, or even both.
            </p>
            <button type="button" className="btn">
              <a href="#jobs">VIEW CAREERS</a>
            </button>
            <a
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setIsApplyJob(true);
                setJobShow(true);
              }}
            >
              Look for an internship?
            </a>
          </div>
        </div>
        <div className="career-img-right"></div>
      </div>

      <div className="career-jobs-container">
        <div className="jobs-marketing d-flex align-items-center">
          <div className="d-flex flex-column">
            <h2 className="lead-heading">MARKETING</h2>
            <ul>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Marketing Lead
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Content & Online Marketing Manager B2B
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Senior Online Marketing Manager
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  SEO Manager
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs-webdev d-flex align-items-center">
          <div className="d-flex flex-column">
            <h2 className="lead-heading">WEB DEVELOPMENT</h2>
            <ul>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Front-End Web-Developer
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Back-End Web-Developer
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Full-Stack Web-Developer
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Database Specialist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs-other d-flex align-items-center" id="jobs">
          <div className="d-flex flex-column mx-5">
            <h2 className="lead-heading">OTHERS</h2>
            <ul>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Lawyer
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Accountant
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Janitor
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsApplyJob(true)}
                >
                  Internship
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs-banner"></div>
      </div>
    </motion.div>
  );
}
