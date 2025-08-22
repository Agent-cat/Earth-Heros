import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import ProjectDetails from '../pages/ProjectDetails'
import { Route, Routes } from 'react-router-dom'
import Team from "../pages/Team" 

const NavRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/projects/:slug" element={<ProjectDetails/>} />
    <Route path="/team" element={<Team hideNavbar={true} />} />

   </Routes>
  )
}

export default NavRoutes