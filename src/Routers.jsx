import React from 'react'

import { Routes, Route } from "react-router-dom";
import Solution from './components/Solution/Solution'


export default function Routers() {
  return (
    <Routes>
        <Route path="/solutions" element={<Solution />} />
    </Routes>
  )
}
