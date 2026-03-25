import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Personal from'./pages/Personal'
import Address from './pages/Address'
import Finish from './pages/Finish'


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/address" element={<Address />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  )
}