import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <ul className="nav nav-tabs">
        
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
    </ul>

  )
}
