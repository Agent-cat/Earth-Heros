import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import ProjectDetails from '../pages/ProjectDetails'
import { Route, Routes } from 'react-router-dom'

const NavRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/projects/:slug" element={<ProjectDetails/>} />
   
   </Routes>
  )
}

export default NavRoutes