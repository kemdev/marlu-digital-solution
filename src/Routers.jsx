import React from 'react'

import { Routes, Route } from "react-router-dom";
import Solution from './components/Solution/Solution'
import LandingPage from './components/LandingPage/LandingPage'


export default function Routers() {
  return (
    <Routes>
        <Route path="/solutions" element={<Solution />} />
        <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}
