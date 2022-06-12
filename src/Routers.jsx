import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Solution from "./components/Solution/Solution";
import LandingPage from "./components/LandingPage/LandingPage";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactForm from "./components/ContactForm/ContactForm";
import Career from './components/Career/Career'
import { AnimatePresence } from "framer-motion"


export default function Routers() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/career" element={<Career />} />
}
