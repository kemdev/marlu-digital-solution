import React from 'react'

import { Routes, Route } from "react-router-dom";
import Solution from './components/Solution/Solution'
import LandingPage from './components/LandingPage/LandingPage'
import Portfolio from './components/Portfolio/Portfolio'

export default function Routers() {
  return (
    <Routes>
        <Route path="/solutions" element={<Solution />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}
