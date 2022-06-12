import React from "react";
import "./career.scss";

import { motion } from "framer-motion";


export default function Career() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
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
            <a href="./">Look for an internship?</a>
          </div>
        </div>
        <div className="career-img-right"></div>
      </div>

      <div className="career-jobs-container">
        <div className="jobs-marketing d-flex align-items-center">
          <div className="d-flex flex-column">
            <h2 className="lead-heading">Careers in Marketing</h2>
            <ul>
              <li>
                <a href="./">Marketing Lead</a>
              </li>
              <li>
                <a href="./">Content & Online Marketing Manager B2B</a>
              </li>
              <li>
                <a href="./">Senior Online Marketing Manager</a>
              </li>
              <li>
                <a href="./">SEO Manager</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs-webdev d-flex align-items-center">
          <div className="d-flex flex-column">
            <h2 className="lead-heading">Careers in Web Development</h2>
            <ul>
                <li>
                  <a href="./">Front-End Web-Developer</a>
                </li>
                <li>
                  <a href="./">Back-End Web-Developer</a>
                </li>
                <li>
                  <a href="./">Full-Stack Web-Developer</a>
                </li>
                <li>
                  <a href="./">Database Specialist</a>
                </li>
              </ul>
              </div>
          </div>
        <div className="jobs-other d-flex align-items-center" id="jobs">
          <div className="d-flex flex-column mx-5">
            <h2 className="lead-heading">Others</h2>
            <ul>
                <li>
                  <a href="./">Lawyer</a>
                </li>
                <li>
                  <a href="./">Accountant</a>
                </li>
                <li>
                  <a href="./">Janitor</a>
                </li>
                <li>
                  <a href="./">Internship</a>
                </li>
              </ul>
          </div>
        </div>
        <div className="jobs-banner"></div>
      </div>
    </motion.div>
  );
}
