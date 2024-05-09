import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
    <nav className="navbar bg-body-tertiary rounded-5 p-2 m-2">
  <div className="container-fluid">
    <span className="navbar-brand h3">Navbar</span>
    <div className="navlinks d-flex gap-2">
    <a className="p-2 border rounded-5" href='#' target='_blank'>Get Project</a>
    <NavLink className="p-2 border rounded-5" to="/login">Onboard Talent</NavLink> 
    </div>
   
  </div>
</nav>
      
    </>
  )
}








